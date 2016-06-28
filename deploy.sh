#!/bin/bash

# we need(?) to do this because jekyll erases everything, including .hg,
# when it regenerates the site.  so we can't regenerate directly into the
# site directory.  nor can we use the same repo for jekyll and the site
# because bitbucket expects index.html to be in the root, which jeckyll
# deletes, which erases jekyll itself, unless we have two repos...

echo $BTS_WEBSITE_PATH
# if [[ ! -d ../../isti.bitbucket.org ]]
# then
#     echo "no ../isti.bitbucket.org"
#     echo "cd ../.."
#     echo "hg clone https://isti@bitbucket.org/isti/isti.bitbucket.org"
#     exit
# fi

# # make sure we are up-to-date
# pushd ..
# hg pull; hg update
# popd
# pushd ../../isti.bitbucket.org
# # it's ok to force here as auto-generated
# hg pull; hg update --clean
# popd

# # generate site
# source env/bin/activate
# pushd ..
# #jekyll1.9 build
# jekyll2.0 build
# popd

# rm -fr ../../isti.bitbucket.org/*
# cp -r ../_site/* ../../isti.bitbucket.org/

# if [ $# -eq 1 ]
# then

#     echo "committing as $1"
#     sleep 3
#     pushd ../../isti.bitbucket.org
#     find . -name "*.html" -exec hg add \{} \;
#     hg commit -m "$1"
#     hg merge --tool internal:local
#     hg push
#     popd

#     pushd ..
#     find _posts -name "*.md" -exec hg add \{} \;
#     hg commit -m "$1"
#     hg push
#     popd

# else
#     echo "add command line arg to commit"
# fi
