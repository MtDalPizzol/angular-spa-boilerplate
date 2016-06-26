# angular-spa-boilerplate
A boilerplate for writing Angular 1.x single page applications with ES6 and Webpack.

> First of all, a big thanks to [Jesús Rodríguez](https://github.com/Foxandxss), from whom I stole the main Webpack config and the basic structure of this README file. Don't forget to checkout his work. It's awesome.

This is an "a little opinionated" boilerplate. It takes care of the basics and comes with one or two dependencies that you, maybe, will not use. Just uninstall them in this case.

I'm going to create another repo with a realy heavly opinionated version of this, which should take care of things like authentication, server communication, internacionalization and others...

## Features included

* Heavily commented webpack configuration with reasonable defaults.
* **ES6**, and **ES7** support with **Babel**.
* **ngAnnotate** integration for cleaner code and "non-breackable" **JavaScript minification**.
* **SASS** automatic compilation and **watch** with ```sass-loader``` for Webpack.
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

## Table of Contents

* [Requirements](#requirements)
* [Installing](#installing)
* [Running the development server](#running-the-development-server)
* [Building files for production](#building-files-for-production)
* [Deploying](#deploying)
* [License](#license)

## Getting Started

### Requirements

I wrote this using `Node v4.4.5` and `NPM v2.15.5`. So, just make sure you have those or newer versions.

### Installing

* `fork` this repo
* `clone` your fork
* Run `npm install` in the root of the project to install all dependencies

### Running the development server

```bash
npm start
```

It will start a local server using `webpack-dev-server` which will watch, build (in-memory), and refresh the browser for you. The port will be displayed to you as `http://localhost:8080`.

### Building files for production

```bash
npm run build
```

Webpack will bundle up your code. Then, it will put all the code you need to deploy your app into de `dist` folder, at the project's root.

### Deploying

Once you've built the files as descrbed above, you can deploy your app.
I included a `server.js` file with a simple `express.js` implementation.
You can run this in any Node environment you wish. To do this, just use the following:

```bash
npm run deploy
```

### License

[MIT](/LICENSE)
