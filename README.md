[![Build Status](https://travis-ci.org/okfde/codefor.de.svg?branch=gh-pages)](https://travis-ci.org/okfde/codefor.de)

# CodeFor.de

These are the source files for the [Code for Germany Website](http://codefor.de).
This readme will guide you to use them and collaborate with us on its contents.

<!-- [TOC] TODO: Jekyll TOC Plugin -->

## Setting up a development sandbox

First clone this git repository by invoking the following in a desired folder
on your shell interpreter (*console*, *terminal*, *command line*, *REPL*),
 presuming you know how to get there:


    $ git clone https://github.com/okfde/codefor.de.git

You can also append another ` foldername` of your desire to the command.
Then change into the folder, i.e.:

    $ cd codefor.de


---

## Meeting Jekyll + Ruby

Now it is about time to install the required gems.
There are several ways to accomplish this.

### Ruby

First of all you need an up-to-date version of the Ruby Programming Language
Interpreter. This can either be installed through your favourite distributions
package manager, or ...

#### RVM

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

#### rbenv

Preferably you will want to do pretty much the same, but with [`rbenv`](http://rbenv.org/).


### Jekyll

#### Setting up a local gemset

##### System-wide installation with Bundler

You can use [Bundler](http://bundler.io/) to install the required gems system-wide:

    $ bundle install

##### System-wide installation without Bundler

Simply install the `github-pages` gem:

    $ gem install github-pages

All required dependencies will be installed automatically. You will need root permissions to do that in most cases.

##### Local installation with Bundler

If you don't want to install all the gems system-wide you can install them just for the project:

    $ bundle install --path vendor/bundle

On OS X you have to configure the following options to build `nokogiri` before running `bundle install`:

    $ bundle config --local build.nokogiri --with-xml2-include=/usr/include/libxml2 --with-xml2-lib=/usr/lib --with-xslt-dir=/usr

After that you can just run `bundle install` every time you want to reinstall or update the installation because Bundler will remember the options you configured.

#### Build and serve the site

Now build the site and serve it:

    $ jekyll serve -w

If you did the installation with Bundler you have to use this command instead:

    $ bundle exec jekyll serve -w

---


## Task Automation and Deployment

To get a fully working website running, especially if you added new Twitter handles somewhere, you have to perform some further tasks.

### Download avatars

There's a Python script to cache all GitHub avatars into the repository.

> #### Virtual Environments

> *optional*

> Similiar to rbenv or nvm, you can create safe installations of Python by using
Virtual Environments. Or even an Virtual Environment Wrapper, but the first
option will be enough for now.

>     $ virtualenv .pyenv
    $ source .pyenv/bin/activate

#### Requirements

Install the following:

    $ pip install pyyaml requests

#### Run the task

And then just execute:

    $ python download_avatars.py

<!-- ``$ ./download_avatars.py` -->

> *note* Don't forget to `deactivate` the virtual environment afterwards, if appropriate.

Don't forget to **commit** the downloaded **images**.

### Node?

Why did we mention NVM up there?

So we're already depending this project on Ruby *and* Python, why not adding
another layer of complexity? Like Node.js, the JavaScript interpreter for servers.

<!-- Does anyone remember Seamonkey/libmozjs as still used in CouchDB? -->

There are two basic options, which you can discover, if you feel adventurous:

* Find and use `gulp` and a corresponding `jekyll` plugin to automate the avatar
scraping upon site regeneration.
* Feel free to fiddle around with `bower` to manage the static assetts and
dependencies.

---

## Some words about Projects

Text on project teasers is cut off after `\n\n`. Alternatively, include a dedicated `excerpt: "<TEXT>"`
in the frontmatter to override.
Images are crop-centered. You can fine tune their appearance by providing a specific crop image
through `imgname-teaser: "<[RELATIVE] PATH TO IMAGE>"` in the same frontmatter.

> *note* Please use **mobile friendly filesizes** for images.

<!-- Another two reasons for Task Automation -->

---

# Get Involved!

Consider our [Contribution](CONTRIBUTING.md) Guidelines.

## Who we are

[Code for Germany](http://codefor.de/ueber).

## Where you can reach us

Legit, on the website who's source you are looking at, http://codefor.de and [Twitter](https://twitter.com/codeforde).

# Legal

[Licensed](LICENSE.md) 2014
