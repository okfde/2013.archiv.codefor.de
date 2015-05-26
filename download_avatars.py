#!/usr/bin/env python
import glob
import os
import logging

import requests
import yaml

logging.basicConfig(level=logging.DEBUG)

BLACKLIST = ('blog', '_site',)


def get_github(username):
    response = requests.get('https://api.github.com/users/' + username)
    response_json = response.json()
    if 'avatar_url' in response_json:
        return response_json['avatar_url']
    return False


avatar_source = [
    ('github', get_github),
    # ('twitter', get_twitter)
]

AVATAR_PATH = 'img/avatars/'


def main():
    existing = glob.glob(AVATAR_PATH + '*.jpg')
    existing = [x.split('/')[-1].split('.')[0] for x in existing]
    labs = [x for x in glob.glob('_labs/*.yml') if not x.startswith(BLACKLIST)]
    for lab in labs:
        logging.debug('Processing Lab %s', lab)
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

                logging.debug('Processing Lab Member %s', member['name'])
                for source, get_image in avatar_source:
                    logging.debug('Checking %s for %s', source, member['name'])
                    key = 'username-%s' % source
                    if key not in member:
                        continue

                    username = member[key]
                    if username in existing:
                        break

                    image_url = get_image(username)
                    if not image_url:
                        continue

                    image = requests.get(image_url, stream=True)
                    image_path = os.path.join(AVATAR_PATH, username + '.jpg')
                    logging.debug('Downloading image to %s', image_path)
                    with open(image_path, 'wb') as fd:
                        for chunk in image.iter_content(1024):
                            fd.write(chunk)
                    break

if __name__ == '__main__':
    main()
