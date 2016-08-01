[![Build Status](https://travis-ci.org/okfde/codefor.de.svg?branch=gh-pages)](https://travis-ci.org/okfde/codefor.de)

# CodeFor.de

These are the source files for the [Code for Germany Website](http://codefor.de).

## Setting up a development environment

First clone this git repository by invoking the following in a terminal
presuming you know how to get there:

    $ git clone https://github.com/okfde/codefor.de.git

## Easy setup

First of all you need an up-to-date version of Ruby and gem. Then you install the required gems:

    $ sudo gem install github-pages

Then build the site and serve it:

    $ jekyll serve -w
    
This command will give you a link where you can preview your changes in your browser.

## Update avatars

There's a Python script to cache all GitHub avatars into the repository.

```bash
virtualenv .pyenv
source .pyenv/bin/activate
pip install pyyaml requests
python update_avatars.py
deactivate
```

## Notes

 * Please use **mobile friendly filesizes** for images.

 * You can set a teaser for texts by defining it in the frontmatter: `excerpt: "<TEXT>"`.

 * The teaser  for an image can be set with `imgname-teaser: "<[RELATIVE] PATH TO IMAGE>"`.

