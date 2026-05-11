#!/bin/bash
npx pbjs -t static-module -w es6 --es6 -p . -o ./proto.js **/*.proto
npx pbts -o ./proto.d.ts ./proto.js
