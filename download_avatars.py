import glob
import os
import logging

import requests
import yaml

logging.basicConfig(level=logging.DEBUG)

BLACKLIST = ('blog', '_site',)


def get_github(username):
    response = requests.get('https://api.github.com/users/' + username)
    return response.json()['avatar_url']


avatar_source = [
    ('github', get_github),
    # ('twitter', get_twitter)
]

AVATAR_PATH = 'img/avatars/'


def main():
    existing = glob.glob(AVATAR_PATH + '*.jpg')
    existing = [x.split('/')[-1].split('.')[0] for x in existing]
    labs = [x for x in glob.glob('*/index.html') if not x.startswith(BLACKLIST)]
    for lab in labs:
        logging.debug('Processing Lab %s', lab)
        with open(lab) as f:
            contents = f.read()
            _, frontmatter, _ = contents.split('---\n', 2)
            meta = yaml.load(frontmatter)
            if len(meta['members']) > 1:
                for member in meta['members']:
                    logging.debug('Processing Lab Member %s', member['name'])
                    for source, get_image in avatar_source:
                        logging.debug('Checking %s for %s', source, member['name'])
                        key = 'username-%s' % source
                        if key in member:
                            username = member[key]
                            if username in existing:
                                break
                            image_url = get_image(username)
                            image = requests.get(image_url, stream=True)
                            image_path = os.path.join(AVATAR_PATH, username + '.jpg')
                            logging.debug('Downloading image to %s', image_path)
                            with open(image_path, 'wb') as fd:
                                for chunk in image.iter_content(1024):
                                    fd.write(chunk)
                            break

if __name__ == '__main__':
    main()
