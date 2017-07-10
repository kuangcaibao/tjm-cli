#!/usr/bin/env bash

git add .

git commit -m "update"

npm version patch

npm uninstall -g tdx-cli-test

npm install -g tdx-cli-test