#!/usr/bin/env python
"""
This script updates all the avatars for the lab members.

If you want to re-download all images, you need to create a personal access token on github and add to both http
requests using basic auth. Otherwise you'll be stopped half-way by github's rate limits.
"""
import glob
import os
import logging
import requests
import yaml

from email.utils import formatdate

logging.basicConfig(level=logging.INFO)

BLACKLIST = ('blog', '_site',)
AVATAR_PATH = 'img/avatars/'

def get_github(username, last_modified):
    """
    Gets the users avatar from the github api whilst using the If-Modified-Since header to work around rate limits.

    :param username: the github username
    :param last_modified: timestamp formatted in the http stlye
    :return: True if the profile didn't change didn't change, False if there was an error or the avatar
    """
    response = requests.get('https://api.github.com/users/' + username, headers={'If-Modified-Since': last_modified})
    if response.status_code == 304:
        return False

    if response.status_code != 200:
        logging.error('Unexpected HTTP status code {} returned for {}'.format(response.status_code, username))
        return False

    url = response.json()['avatar_url']
    avatar = requests.get(url, headers={'If-Modified-Since': last_modified})
    if response.status_code == 304:
        return False

    if response.status_code != 200:
        logging.error('Unexpected HTTP status code {} returned for {}'.format(response.status_code, username))
        return False

    return avatar.content


avatar_source = [
    ('github', get_github),
    # ('twitter', get_twitter)
]


def main():
    # Get date for the If-Last-Modified header
    with open(os.path.join(AVATAR_PATH, 'last_modified.txt')) as fd:
        last_modified = fd.readline().rstrip()
    current_timestamp_formatted = formatdate(timeval=None, localtime=False, usegmt=True)

    labs = [x for x in glob.glob('_labs/*.yml') if not x.startswith(BLACKLIST)]
    for lab in labs:
        with open(lab) as f:
            contents = f.read()

        try:
            _, frontmatter = contents.split('---\n', 2)
        except ValueError:
            _, frontmatter, _ = contents.split('---\n', 2)
        meta = yaml.load(frontmatter)
        if 'members' not in meta:
            continue

        for member in meta['members']:
            if member['name'] is None:
                continue

            logging.info('Processing Lab Member %s', member['name'])
            for source, get_image in avatar_source:
                logging.info('Checking %s for %s', source, member['name'])
                key = 'username-%s' % source
                if key not in member:
                    continue

                username = member[key]
                avatar = get_image(username, last_modified)
                if not avatar:
                    continue

                avatar_path = os.path.join(AVATAR_PATH, username + '.jpg')
                logging.info('Saving image to %s', avatar_path)
                with open(avatar_path, 'wb') as fd:
                    fd.write(avatar)

                break

    # Remember the last successful run for the If-Last-Modified header
    with open(os.path.join(AVATAR_PATH, 'last_modified.txt'), 'w') as fd:
        fd.write(current_timestamp_formatted)


if __name__ == '__main__':
    main()
