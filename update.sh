#!/usr/bin/env bash

echo "--- publish package---"
git add .
git commit -m "update"
npm version patch
npm publish

echo "--- update package ---"
npm uninstall -g tdx-cli-test
npm install -g tdx-cli-test