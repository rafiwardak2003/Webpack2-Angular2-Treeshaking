# Tree-Shaking with Webpack 2 and Angular 2 (TypeScript)

This is a simple example on how to achieve tree shaking with Webpack 2.
Don't use the project structure as a skeleton for your project. This repo only demonstrates 
how to achieve simple tree-shaking with Webpack 2 and TypeScript. You could use my fork of 
angular2-webpack-starter as a starter skeleton (as I have added, AOT and tree-shaking).

## Steps To Run
`npm install`
`npm start`
`http://localhost:3000/`

## Steps to Build Bundle
`npm install`
`npm run build`
`Open dist/`

### Important things for tree-shaking:
1. Webpack version has to be 2 or above (Webpack marks unused imports)
2. The `compoiledOptions` section of tsconfig.json needs to be updated; change `module` to 'es6' and `moduleResolution` to 'node`
3. UglifyJS will remove the unused imports

