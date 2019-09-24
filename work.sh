#!/bin/bash

SCRIPT_SRC="$BASH_SOURCE"
SCRIPT_DIR="$(dirname "$BASH_SOURCE")"

node $SCRIPT_DIR/index.js $SCRIPT_DIR $1

if [ $1 = "s" ]
then
  SELECTED_SITE=$(cat "$SCRIPT_DIR"/tmp/data.txt | grep selected_site | cut -d":" -f2)
  SELECTED_SITE_PATH=$(cat "$SCRIPT_DIR"/tmp/data.txt | grep sites_path | cut -d":" -f2)

  SELECTED_SITE_FULL_PATH="$SELECTED_SITE_PATH"/"$SELECTED_SITE"

  cd "$SELECTED_SITE_FULL_PATH"
fi

if [ $1 = "p" ]
then
  SELECTED_PROJECT=$(cat "$SCRIPT_DIR"/tmp/data.txt | grep selected_project | cut -d":" -f2)
  SELECTED_PROJECT_PATH=$(cat "$SCRIPT_DIR"/tmp/data.txt | grep projects_path | cut -d":" -f2)

  SELECTED_PROJECT_FULL_PATH="$SELECTED_PROJECT_PATH"/"$SELECTED_PROJECT"

  cd "$SELECTED_PROJECT_FULL_PATH"
fi
