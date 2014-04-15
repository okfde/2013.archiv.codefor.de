# CodeFor.de

## Install and run the site

`git clone` the repo and install the dependencies:

    bundle install
    # or without bundler
    gem install github-pages

Then build the site and serve it:

    jekyll serve -w


## Download avatars

There's a Python script to cache all GitHub avatars into the repository.
Install the following:

    pip install pyyaml requests

And then just execute:

    python download_avatars.py

Don't forget to commit the downloaded images.
