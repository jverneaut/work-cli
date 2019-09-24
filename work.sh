#!/bin/bash

SCRIPT_SRC="$BASH_SOURCE"
SCRIPT_DIR="$(dirname "$BASH_SOURCE")"

node $SCRIPT_DIR/index.js $SCRIPT_DIR $1
