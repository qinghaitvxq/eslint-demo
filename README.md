# eslint-demo

1.  npm init
2.npm i -D eslint
3.npm eslint --init
4 .npx eslint src/\*.js
2.  npx eslint src/\*.js --fix
6.npm i -D prettier-eslint
7.npm i -D prettier-eslint-cli
8.npx prettier-eslint 'src/\*_/_.js'
9.npx prettier-eslint 'src/\*_/_.js --write
3.  "lint":"eslint '**/\*.js'",
"lint:fix":"prettier-eslint '**/\*.js' --write",
4.
npm run lint
npm run linf:fix

// prettier part
//npm install -D eslint-config-prettier eslint-plugin-prettier