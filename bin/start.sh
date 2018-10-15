#!/bin/bash
set -euo pipefail
IFS=$'\n\t'

(cd app && docker build -t bam/base:latest --file Dockerfile.base .)
docker-compose up -d --build $@