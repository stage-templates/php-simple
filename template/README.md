# {{ name }}

> {{ description }}

## Build Setup

``` bash
# install js dependencies
yarn

# install composer dependencies
composer install

# copy the .env file and setup your variables
cp .env.example .env

# serve with browsersync
npm run watch
```

## Deployment

Easy Rsync deployment with [project-sync](https://www.npmjs.com/package/project-sync)

``` bash
# production
$ npm run deploy:prod

# dev or staging
$ npm run deploy:dev
```
