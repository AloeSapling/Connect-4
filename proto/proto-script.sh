#!/bin/bash
npx pbjs -t static-module -w es6 --es6 -p . -o ./proto.js $(find . -name "*.proto")
npx pbts -o ./proto.d.ts ./proto.js

cp ./proto.d.ts ../connect-4-backend/lib/proto.d.ts
cp ./proto.js ../connect-4-backend/lib/proto.js

mv ./proto.d.ts ../connect-4-frontend/src/lib/proto.d.ts
mv ./proto.js ../connect-4-frontend/src/lib/proto.js
