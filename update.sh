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
npm uninstall -g tdx-cli-test
npm install -g tdx-cli-test