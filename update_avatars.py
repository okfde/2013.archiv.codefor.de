#!/usr/bin/env python3
"""
This script updates all the avatars for the lab members.

If you want to re-download all images, you need to create a personal access token on github and
set it through `GITHUB_AUTH_TOKEN`. Otherwise you'll be stopped halfway by github's rate limits.
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

def get_avatar(username, last_modified):
    """
    Gets the users avatar from the github api whilst using the If-Modified-Since header to work around rate limits.

    :param username: the github username
    :param last_modified: timestamp formatted in the http stlye
    :return: True if the profile didn't change didn't change, False if there was an error or the avatar
    """
    headers = {'If-Modified-Since': last_modified}
    github_auth_token = os.environ.get("GITHUB_AUTH_TOKEN", None)
    if github_auth_token:
        headers["Authorization"] = "token " + github_auth_token

    response = requests.get('https://api.github.com/users/' + username, headers=headers)
    if response.status_code == 304:
        return False

    if response.status_code != 200:
        logging.error('Unexpected HTTP status code {} returned for {}'.format(response.status_code, username))
        return False

    url = response.json()['avatar_url']
    avatar = requests.get(url, headers=headers)
    if response.status_code == 304:
        return False

    if response.status_code != 200:
        logging.error('Unexpected HTTP status code {} returned for {}'.format(response.status_code, username))
        return False

    return avatar.content

def main():
    # Get date for the If-Last-Modified header
    with open(os.path.join(AVATAR_PATH, 'last_modified.txt')) as fd:
        last_modified = fd.readline().rstrip()
    current_timestamp_formatted = formatdate(timeval=None, localtime=False, usegmt=True)

    usernames = set()
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

            username = member.get('username-github')
            if username == None:
                continue

            usernames.add((username, member['name']))

    usernames = sorted(list(usernames))
    logging.info("Found %d users", len(usernames))

    for username, member_name in usernames:
        logging.info('Processing Lab Member %s (%s)', member_name, username)

        avatar = get_avatar(username, last_modified)
        if not avatar:
            continue

        avatar_path = os.path.join(AVATAR_PATH, username + '.jpg')
        print(avatar_path, AVATAR_PATH, username)
        logging.info('Saving image to %s', avatar_path)
        with open(avatar_path, 'wb') as fd:
            fd.write(avatar)

    # Remember the last successful run for the If-Last-Modified header
    with open(os.path.join(AVATAR_PATH, 'last_modified.txt'), 'w') as fd:
        fd.write(current_timestamp_formatted)


if __name__ == '__main__':
    main()
