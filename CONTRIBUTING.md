Please help turning this mess into something usable #89, 1.

This file comprehends README.md and LICENSE.md within this same repository.

The rest in FILE_ID.DIZ style, explained:

```
__static assetts

apple-touch-icon*.png
*_fav_cfg.png
largetile.png
favicon.ico
mediumtile.png
smalltile.png
assets/*
js/*
img/*
fonts/*


__jekyll specific

_config.yml - configuration file

___ruby specific

.ruby-gemset
.ruby-version
Gemfile - gemset for bundler
Gemfile.lock

___templates

404.html
feed.xml

___source files and folders for dynamic assetts

(_)(.*)\b(md|html)\b - Thanks http://regex101.com !


__also machines talk. README, LICENSE and CONTRIBUTING for cybernetic agents.

crossdomain.xml
humans.txt
robots.txt


__git specific

.gitignore


__GitHub specific

CNAME - this websites FQDN for publishing via GitHub Pages


__codefor.de specific

download_avatars.py - helper script to download twitter avatars


__continuous integration specific, to automatically determine code climate

.travis.yml


__unknown (at least to me)

mce-opt-in-*.html


__published distribution, generated from all the above

_site/*
```
