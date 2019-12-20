# react-boilerplate

Minimal boilerplate with [React](https://reactjs.org/), [Redux](https://redux.js.org/) and [styled-components](https://www.styled-components.com/) using [webpack](https://webpack.js.org/) compiler.

> You should manage your node versions with [nvm](https://github.com/creationix/nvm) or [nvm-windows](https://github.com/coreybutler/nvm-windows) (Note: make sure to update your nvm-windows to v1.1.7, which fixes npm cli download URL issues)

```sh
# install the correct node version via nvm
nvm install

# or install v12.14.0 LTS directly
nvm install 12.14.0

# install all project dependencies one
yarn
```

_Adding new project dependencies_

Please use [yarn](https://yarnpkg.com/) for package management, e.g.:

```sh
# adding a new dependency (package.json > dependencies)
yarn add react

# adding a new development dependency (package.json > devDependencies)
yarn add --dev react

# remove a dependency
yarn remove react

# update a package
yarn upgrade react
```

## Development

```sh
# start local development
yarn start

# run tests (Jest)
yarn test
# or run with watch mode
yarn test:watch

# create a build
yarn build
```

## Useful links and notes

- How to structure your React app? Have a look at the React [FAQs](https://reactjs.org/docs/faq-structure.html). I would recommend to structure your app by features: One feature folder that contains styles, JS, tests and assets, if possible. Is it a huge feature? Create a new root folder for that feature.
- Good additional read: [Best practices for building a large scale react application](https://buttercms.com/blog/best-practices-for-building-a-large-scale-react-application)
- Write tests, this boilerplate comes with a basic [Jest](https://jestjs.io/) setup.
- Make yourself familiar with [React](https://reactjs.org/), [Redux](https://redux.js.org/) and [styled-components](https://www.styled-components.com/) - the live editor examples are really helpful.
- On each commit [`husky`](https://github.com/typicode/husky) runs [eslint](https://eslint.org/) (with configured [prettier](https://prettier.io/) plugin).
- On each push `husky` executes `npm test`.
