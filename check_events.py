#!/usr/bin/env python3
from datetime import date
import glob
import os.path

import yaml


def _get_frontmatter(filename):
    with open(filename) as f:
        content = f.read()

    _, frontmatter, *_ = content.split('---\n', 2)
    try:
        return yaml.safe_load(frontmatter)
    except yaml.composer.ComposerError:
        frontmatter, *_ = content.split('\n---', 1)
        return yaml.safe_load(frontmatter)


def main():
    event_files = os.path.join(
        os.path.dirname(os.path.abspath(__file__)),
        '_termine',
        '*.md',
    )

    today = date.today()

    for event_file in glob.glob(event_files):
        event_data = _get_frontmatter(event_file)
        if today > event_data['date']:
            print('Outdated event on {} in {}'.format(
                event_data['date'], event_file.rsplit('/')[-1]),
            )


if __name__ == '__main__':
    main()
