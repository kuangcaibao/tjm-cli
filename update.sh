#!/usr/bin/env bash

echo ""
echo "--- publish package---"
echo ""
git add .
git commit -m "update"
npm version patch
npm publish

echo ""
echo "--- update package ---"
echo ""
# npm uninstall -g tjm-cli
npm install -g tjm-cli
# npm update -g tjm-cli
tjm-cli --version