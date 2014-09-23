[![Build Status](https://travis-ci.org/okfde/codefor.de.svg?branch=gh-pages)](https://travis-ci.org/okfde/codefor.de)

# CodeFor.de

## Installation

First `git clone` this repository.

Then install the required gems. There are several ways to do this.

### System-wide installation with Bundler

You can use [Bundler](http://bundler.io/) to install the required gems system-wide:

    bundle install

### System-wide installation without Bundler

Simply install the `github-pages` gem:

    gem install github-pages

All required dependencies will be installed automatically. You will need root permissions to do that in most cases.

### Local installation with Bundler

If you don't want to install all the gems system-wide you can install them just for the project:

    bundle install --path vendor/bundle

On OS X you have to configure the following options to build `nokogiri` before running `bundle install`:

    bundle config --local build.nokogiri --with-xml2-include=/usr/include/libxml2 --with-xml2-lib=/usr/lib --with-xslt-dir=/usr

After that you can just run `bundle install` every time you want to reinstall or update the installation because Bundler will remember the options you configured.


## RVM

You can use [RVM](http://rvm.io) to sandbox the Gems needed for this project
in a Gemset. To do so you will need to install RVM first. When you successfully
installed RVM make sure you also installed the Ruby version defined for this
project in [`.ruby-version`](.ruby-version).

To initialize the Gemset environment leave the project folder once and then
return back to it:

```bash
$ cd ..
$ cd codefor.de
```

Finally, after pulling the latest commits from the remote repository run the
`bundle` command to ensure you have the latest Gems installed into you Gemset.


## Build and serve the site

Now build the site and serve it:

    jekyll serve -w

If you did the installation with Bundler you have to use this command instead:

    bundle exec jekyll serve -w

## Download avatars

There's a Python script to cache all GitHub avatars into the repository.
Install the following:

    pip install pyyaml requests

And then just execute:

    python download_avatars.py

Don't forget to commit the downloaded images.

## Projects 

Text on project teasers is cut off after \n\n. Include a dedicated "excerpt:" in the frontmatter to override. 
Images are crop-centered. You can fine tune by providing a specific crop image through "imgname-teaser:" in frontmatter.   

Please use mobile friendly filesizes for images.

