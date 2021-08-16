# react-boilerplate

Minimal boilerplate with [React](https://reactjs.org/), [Redux](https://redux.js.org/) and [styled-components](https://www.styled-components.com/) using [webpack](https://webpack.js.org/) compiler.

> You should manage your node versions with [nvm](https://github.com/creationix/nvm) or [n](https://github.com/tj/n)

```sh
# use / install projects node version with nvm
nvm use
# or n
n auto

# install all project dependencies one
npm i
```

## Development

```sh
# start local development
npm start

# run tests (Jest)
npm test
# or run with watch mode
npm test:watch

# create a build
npm build
```

## Useful links and notes

- How to structure your React app? Have a look at the React [FAQs](https://reactjs.org/docs/faq-structure.html). I would recommend to structure your app by features: One feature folder that contains styles, JS, tests and assets, if possible. Is it a huge feature? Create a new root folder for that feature.
- Good additional read: [Best practices for building a large scale react application](https://buttercms.com/blog/best-practices-for-building-a-large-scale-react-application)
- Write tests, this boilerplate comes with a basic [Jest](https://jestjs.io/) setup.
- Make yourself familiar with [React](https://reactjs.org/), [Redux](https://redux.js.org/) and [styled-components](https://www.styled-components.com/) - the live editor examples are really helpful.
- On each commit [`husky`](https://github.com/typicode/husky) runs [eslint](https://eslint.org/) (with configured [prettier](https://prettier.io/) plugin).
- On each push `husky` executes `npm test`.
