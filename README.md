# Workflow Zero
### Use the latest and greatest CSS and vanilla JS today - with transpiled ES6 and autoprefixed CSS that works even on IE 10!

A starter workflow for beginners (with example image lazy loading and array/object spread).

Most of workflow is based on the [article](https://www.codeproject.com/Articles/1222228/Slick-Lazy-Load-Photo-Grid-Using-Webpack) by Jim Frenette so you should check it out!

## How to get started:

```javascript
npm install // to install all node modules pointed in package.json
```

```javascript
npm start // to start the dev environment
```

```javascript
npm run build // creates a prod build in the /dist folder - minified output files + source maps
```

## Features:

* Uses Webpack 3 and npm scripts.

* Auto-updates the browser on save with lite-server. The annoying browser-list notifications are removed through the config file (bs-config.js).

* Babel transpiling for ES6 and beyond + object spread plugin in the config file (.babelrc).

* Eslint for JS linting with the airbnb plugin and some custom lint rules (.eslintrc).

* CSS with the SASS preprocessor.

* Postcss - autoprefixer for older browsers (very useful for Flexbox). Cssgrid -ms- prefixes are enabled though the config file (postcss.config.js). For browser preferences check the package.json file. CSSnano for minification.

* Csscomb config for consistent style order. (I'm using it with the vscode plugin on save).
