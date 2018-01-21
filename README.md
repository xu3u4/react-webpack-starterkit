[![Build Status](https://travis-ci.org/xu3u4/react-webpack-starterkit.svg?branch=master)](https://travis-ci.org/xu3u4/react-webpack-starterkit)
[![dependencies Status](https://david-dm.org/xu3u4/react-webpack-starterkit/status.svg)](https://david-dm.org/xu3u4/react-webpack-starterkit)
[![devDependencies Status](https://david-dm.org/xu3u4/react-webpack-starterkit/dev-status.svg)](https://david-dm.org/xu3u4/react-webpack-starterkit?type=dev)

# react-webpack-startkit
A quick starter for react+webpack, which configs basic packages and fundamental settings with some basic usages.
Hope this starter kit that briefly describe what the modules are, can make everything simpler and more clear for forgetful me.
## Features
- React
- Redux
- Webpack 3
- Eslint (for maintaining coding quality)
- Jest (for testing)

# Environment setup

```
$ git clone https://github.com/xu3u4/react-webpack-starterkit.git
$ cd react-webpack-starterkit
$ npm install || $ yarn install
```

# Modules
### React, Redux
[react](https://github.com/facebook/react)
One of millions Javascript library. :wink: :stuck_out_tongue_closed_eyes:
which features component reusability.

[react-dom](https://github.com/facebook/react/tree/master/packages/react-dom)
This package serves as the entry point of the DOM-related rendering paths. Usually uses with react together.

[prop-types](https://github.com/facebook/prop-types)
Runtime type checking for React props and similar objects.
It was a default in previous react package, but should be installed manually after React v15.5.0.

[react-hot-loader](https://github.com/gaearon/react-hot-loader)
Making modification to be changed realtime when development.

[react-redux](https://github.com/reactjs/react-redux)
Official React bindings for Redux.

[redux](https://github.com/reactjs/redux)
Introduce the ideal from Flux, redux uses a single store to manage states.

[redux-thunk](https://github.com/gaearon/redux-thunk)
Thunk middleware for Redux.
Here is everything:
```javascript
function createThunkMiddleware(extraArgument) {
  return ({ dispatch, getState }) => next => action => {
    if (typeof action === 'function') {
      return action(dispatch, getState, extraArgument);
    }

    return next(action);
  };
}
```

[redux-devtools](https://github.com/gaearon/redux-devtools)
DevTools for Redux with hot reloading, action replay, and customizable UI 

### Babel
[babel-core](https://github.com/babel/babel/tree/7.0/packages/babel-core)
Babel compiler core

[babel-eslint](https://github.com/babel/babel-eslint)
babel-eslint allows you to lint ALL valid Babel code with the fantastic ESLint.

[babel-loader](https://github.com/babel/babel-loader)
This package allows transpiling JavaScript files using Babel and webpack.

[babel-preset-react](https://github.com/babel/babel/tree/master/packages/babel-preset-react)
Which includes: 
+ preset-flow
+ syntax-jsx
+ transform-react-jsx
+ transform-react-display-name

[babel-preset-stage-1](https://github.com/babel/babel/tree/master/packages/babel-preset-stage-1)
Babel's stage presets equate to the TC39 Process and the different states(0: strawman, 1: formal proposal, 2: draft, 3: candidate) of each proposal for a potential language change. When a candidate becomes a formal specification, it will go to the next generation of ES.

[babel-preset-es2016](https://github.com/babel/babel/tree/master/packages/babel-preset-es2016)
Based on which Javascript version you are working on. The latest one is ES7(es2016).

### ESLint
[ESLint](https://github.com/eslint/eslint)
ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.

[eslint-config-airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)
Of course some rules can be modified by ourselves, but we can reference airbnb's config as a more reliable standard.

[eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import)
This plugin intends to support linting of ES2015+ (ES6+) import/export syntax, and prevent issues with misspelling of file paths and import names.

[eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react)
React specific linting rules for ESLint

[eslint-plugin-jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y)
Static AST(runtime-analysis tool) checker for accessibility rules on JSX elements.

### Webpack
[webpack](https://github.com/webpack/webpack)
A bundler for javascript and other needed files.
:thumbsup: Code Splitting allows to load parts for the application on demand.

[css-loader](https://github.com/webpack-contrib/css-loader)
css loader module for webpack

[style-loader](https://github.com/webpack-contrib/style-loader)
style loader module for webpack.
It's recommended to combine style-loader with the css-loader.

[sass-loader](https://github.com/webpack-contrib/sass-loader)
Sass loader for webpack. Compiles Sass to CSS.
The sass-loader requires node-sass and webpack as peerDependency.

[eslint-loader](https://github.com/MoOx/eslint-loader)
eslint loader module for webpack. Can be preloaded lint the code before webpack bundled.

[eslint-import-resolver-webpack](https://www.npmjs.com/package/eslint-import-resolver-webpack)
webpack resolution plugin for eslint-plugin-import

[html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin)
A webpack plugin that simplifies creation of HTML files to serve webpack bundles.

[node-sass](https://github.com/sass/node-sass)
Node-sass is a library that provides binding for Node.js to LibSass, which allows you to natively compile .scss files to css.


### Testing tool relateds
[jest](https://github.com/facebook/jest)
A very handy testing tool for React, which allows you to do snapshot testing of react dom tree and instant test feedback.

[identity-obj-proxy](https://github.com/keyanzhang/identity-obj-proxy)
An identity object using ES6 proxies. Useful for mocking webpack imports. For instance, you can tell Jest to mock this object as imported CSS modules; then all your className lookups on the imported styles object will be returned as-is.

[react-test-renderer](https://github.com/facebook/react/tree/master/packages/react-test-renderer)
This package provides an experimental React renderer that can be used to render React components to pure JavaScript objects, without depending on the DOM or a native mobile environment when you test with jest.

[redux-mock-store](https://github.com/arnaudbenard/redux-mock-store)
A mock store for your testing your redux async action creators and middleware.

[enzyme](https://github.com/airbnb/enzyme)
A testing utility for React that makes it easier to assert, manipulate, and traverse your React Components' output.

[enzyme-to-json](https://github.com/adriantoine/enzyme-to-json)
Convert Enzyme wrappers to a format compatible with Jest snapshot testing.

[jsdom](https://github.com/tmpvar/jsdom)
It can mimic the web browser's behaviour to be useful for testing and scraping real-world web applications.

jsdom is a pure-JavaScript implementation of many web standards, notably the WHATWG(The Web Hypertext Application Technology Working Group) DOM and HTML Standards, for use with Node.js. 

### Server side
[nodemon](https://github.com/remy/nodemon)
Monitor for any changes in your node.js application and automatically restart the server.
A perfect tool for development. :thumbsup:

[body-parser](https://github.com/expressjs/body-parser)
Node.js body parsing middleware for server side API use.
Formatting incoming request bodies to a different type(ex. raw, json or text) before your handlers.

[cors](https://github.com/expressjs/cors)
CORS is a node.js package for providing a Connect/Express middleware that can enable cross domain requests.

[express](https://github.com/expressjs/express)
A simple routing framework for Node.

### Database
[mongodb](https://github.com/mongodb/node-mongodb-native)
A NoSQL(Not only SQL) document database service.

[mongoose](https://github.com/Automattic/mongoose)
A MongoDB ODM(An ODM maps between an Object Model and a Document Database) for Node.js works in an asynchronous environment.
