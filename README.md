# angular-spa-boilerplate
A boilerplate for writing Angular 1.x single page applications with ES6 and Webpack.

> First of all, a big thanks to [Jesús Rodríguez](https://github.com/Foxandxss), from whom I stole the main Webpack config and the basic structure of this README file. Don't forget to checkout his work. It's awesome.

This is a slightly opinionated boilerplate. It takes care of the basics and comes with one or two dependencies that you may or may not use. Just uninstall them in this case.

I'm going to create another repo with a really heavily opinionated version of this, which should take care of things such as authentication, server communication, internationalization and others...

## Table of Contents

* [Features included](#features-included)
* [Quick start](#quick-start)
* [Installation](#getting-started)
  * [Requirements](#requirements)
  * [Installing](#installing)
* [Usage](#usage)
  * [Running the development server](#running-the-development-server)
  * [Building files for production](#building-files-for-production)
  * [Deploying](#deploying)
  * [Testing](#testing)
* [About the demo app](#about-the-demo-app)
  * [Dependencies](#dependencies)
  * [Pages](#pages)
* [License](#license)


## Features included

* Heavily commented webpack configuration with reasonable defaults.
* **ES6**, and **ES7** support with **[Babel](https://babeljs.io/)**.
* **[ngAnnotate](https://github.com/olov/ng-annotate)** integration for cleaner code and "non-breackable" **JavaScript minification**.
* **[SASS](http://sass-lang.com/)** automatic compilation and **watch** with `sass-loader` for **[Webpack](https://webpack.github.io/)**.
* A pattern for **lazy loading** resources on demand
* Development server with **live reload**.
* **Production builds** with cache busting.
* **Source maps** included in all builds.
* No gulp and no grunt, just npm scripts.

## Quick start

```bash
# clone our repo
$ git clone https://github.com/MtDalPizzol/angular-spa-boilerplate.git my-app

# change directory to your app
$ cd my-app

# install the dependencies with npm
$ npm install

# start the development server
$ npm start
```

After that, go to [http://localhost:8080](http://localhost:8080) in your browser.

## Installation

### Requirements

I wrote this using `Node v4.4.5` and `NPM v2.15.5`. So, just make sure you have those or newer versions.

### Installing

* `fork` this repo
* `clone` your fork
* Run `npm install` in the root of the project to install all dependencies

## Usage

### Running the development server

```bash
npm start
```

It will start a local server using `webpack-dev-server` which will watch, build (in-memory), and refresh the browser for you. The port will be displayed to you as `http://localhost:8080`.

### Building files for production

```bash
npm run build
```

Webpack will bundle up your code, then, it will put all the code you need to deploy your app into de `dist` folder, at the project's root.

### Deploying

Once you've built the files as described above, you can deploy your app.
I included a `server.js` file with a simple **[Express](http://expressjs.com/)** implementation.
You can run this in any Node environment you wish. To do this, just use the following:

```bash
npm run deploy
```

### Testing

This is shipped with a **[Karma](https://karma-runner.github.io/1.0/index.html)** configuration. It will take all the files ending in `.spec.js` into your `app` folder and run the tests for you. You can do this a single time:

```bash
npm run test
```

... or you can watch the files for changes to rerun the tests:

```bash
npm run test-watch
```

## About the demo app

### Dependencies
The demo app comes with the following popular/useful dependencies installed. It is up to you to use them.

* [UI Router](https://github.com/angular-ui/ui-router)
* [ocLazyLoad](oclazyload.readme.io)
* [Angular Material](material.angularjs.org)
* [Material Design Icons](https://materialdesignicons.com/)
* [Material Design Data Table](https://github.com/daniel-nagy/md-data-table)
* [Angular Messages](https://docs.angularjs.org/api/ngMessages)
* [Angular Breadcrumb](https://github.com/ncuillery/angular-breadcrumb)
* [Angular UI Notification](https://github.com/alexcrack/angular-ui-notification)
* [jQuery](https://jquery.com/)
* [Perfect Scrollbar](https://github.com/noraesae/perfect-scrollbar)

It also includes [Bourbon](http://bourbon.io/), a SASS mixin library.

### Pages

The demo app comes with 2 "layouts" and 3 "modules", as described below:

* Auth layout
  * [Login module](http://localhost:8080/auth/login)
* Default layout
  * [Dashboard module](http://localhost:8080)
  * People module
    * [People list](http://localhost:8080/people)
    * [Add person form](http://localhost:8080/people/add)

## License

This software is provided free of charge and without restriction under the [MIT License](/LICENSE)
