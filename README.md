# project-starter-gulp

A personal project starter kit with ES6, React, Redux and SPA routing. It's intended to kickstart my personal projects, but if it works for you, feel free to use.

In addition to tools/templates below, also defines `.editorconfig` and `.eslintrc` files for a consistent environment and coding style. `package.json` contains necessary modules to run linting in SublimeText.

## Getting started

```
$ npm install
$ npm run dev
```

### Modifying source / destination directories
To alter where Gulp watches for files, or puts files after compile, do so in `./scripts/config.json`. Initial file structure:
```
└──public/
    └──dist/
    └──client/
        └──bundle.js
        └──global.css
└──scripts/
    └──config.json
├──scss/
├──src/
    └──components/
└──index.js
```

## What it does
1. Bundles and Babelifys all Javascript files into single bundle.js
2. Compiles SCSS to CSS.
3. Starts a webserver at `localhost:8000`
4. Watches all JS and SCSS files for changes and automatically rebundles/refreshes browser

## What it uses
* Gulp
* Babel
* React
* Redux/React-Redux/Redux-Router
* SCSS
* ESlint
