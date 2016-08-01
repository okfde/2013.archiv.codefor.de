[![Build Status](https://travis-ci.org/okfde/codefor.de.svg?branch=gh-pages)](https://travis-ci.org/okfde/codefor.de)

# CodeFor.de

These are the source files for the [Code for Germany Website](http://codefor.de).

## Setup

You can easily do edits and preview changes on github. But if to want to preview
your edits or do bigger changes, you need a local setup.

For that you first need to install git, Ruby and gem.

Then clone this repository by invoking the following in a terminal,
presuming you know how to get there:

```bash
git clone https://github.com/okfde/codefor.de.git
```
Install Ruby and gem. Then get the dependencies:

```bash
sudo gem install bundler
bundler install
```

You can now build the site and serve it:

```bash
bundler exec jekyll serve
```

This command will give you a link where you can preview your changes in your browser.

## Notes

 * Please use **mobile friendly filesizes** for images.

 * You can set a teaser for texts by defining it in the frontmatter: `excerpt: "<TEXT>"`.

 * The teaser  for an image can be set with `imgname-teaser: "<[RELATIVE] PATH TO IMAGE>"`.

## Update avatars

There's a python script to save all GitHub avatars into the repository:

```bash
virtualenv .env
source .env/bin/activate
pip install pyyaml requests
python update_avatars.py
deactivate
```
