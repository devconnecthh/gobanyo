# gobanyo

> A feedback system for gobanyo

## Prerequirements

- Install [Yarn](https://yarnpkg.com/)

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## How this project was setup

```
npx create-nuxt-app

# Project name gobanyo
# Project description A feedback system for gobanyo
# Author name devconnect
# Choose programming language JavaScript
# Choose the package manager Yarn
# Choose UI framework Bootstrap Vue
# Choose custom server framework None (Recommended)
# Choose Nuxt.js modules Progressive Web App (PWA) Support
# Choose linting tools ESLint, Prettier, Lint staged files, StyleLint
# Choose test framework Jest
# Choose rendering mode Single Page App
# Choose development tools jsconfig.json (Recommended for VS Code), Semantic Pull Requests

# enable support for SCSS
yarn add node-sass sass-loader -D
```

## Outline / idea

The idea is to provide a feedback system for [GoBanyo](https://gobanyo.org/en/gobanyo-waschen-ist-wurde/).
It should enable people using their shower-bus to give feedback on the service.

### UX requirements

- fully offline-capable
- easy to understand
- language-independent (e.g. use icons/emoticons)

### Technical requirements

- easy to apply (e.g. via a cheap tablet)
- no server/storage should be required for simplicity and data-protection
- export of gathered data / analysis (possibly using a PIN and the [Web Share API](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/share))
