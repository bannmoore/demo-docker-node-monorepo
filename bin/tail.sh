#!/bin/bash
set -euo pipefail
IFS=$'\n\t'

docker-compose logs -f $@