#!/bin/bash
set -euo pipefail
IFS=$'\n\t'

for package in packages/*; do
  (
    cd $package
    npm install "$@"
  )
done