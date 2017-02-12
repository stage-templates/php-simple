# php-simple-boilerplate

> A simple php setup with a single index.php file with reloading via [browser-sync](https://www.npmjs.com/package/browser-sync) and deployment via [project-sync](https://www.npmjs.com/package/project-sync) and an initial composer.json

> This project assumes you have php running locally and can resolve local dev domains like my-project.dev

## Usage

This is a project template for [stage-cli](https://github.com/steven-klein/stage-cli).

``` bash
$ npm install -g stage-cli      # Install stage-cli if you haven't already
$ stage init php-simple my-project  # Create a new project based on this template
$ cd my-project                 # Navigate into your new project folder
$ yarn                          # Install dependencies with yarn (npm install - if you don't use yarn)
$ composer install              # install composer dependencies
$ cp .env.example               # dupe the example env and set your browser-sync proxy (local dev domain)
$ npm run watch                 # serve and watch for changes with browser-sync
```

For more information on managing php dependencies see the [composer docs](https://getcomposer.org/).

### Fork It And Make Your Own

You can [fork this repo](https://help.github.com/articles/fork-a-repo/) to create your own boilerplate, and use it with `stage-cli`:

``` bash
stage init username/repo my-project
```
