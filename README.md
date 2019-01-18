# react-boilerplate

Minimal boilerplate with [React](https://reactjs.org/), [Redux](https://redux.js.org/) and [styled-components](https://www.styled-components.com/) using [webpack](https://webpack.js.org/) compiler.

> You should manage your node versions with [nvm](https://github.com/creationix/nvm) or [nvm-windows](https://github.com/coreybutler/nvm-windows) (Note: make sure to update your nvm-windows to v1.1.7, which fixes npm cli download URL)

```bash
# install all dependencies once
nvm install && npm install

# local development http://localhost:3000
npm start

# test
npm test

# create a build
npm run build
```

## Useful links and notes

- How to structure your React app? Have a look at the React [FAQs](https://reactjs.org/docs/faq-structure.html). I would recommend to structure your app by features. Grouped by feature: one feature folder that contains styles, JS, tests and assets, if possible. Is it a huge feature? Create a new root folder for that feature.
- Write tests, this boilerplate comes with a basic [Jest](https://jestjs.io/) setup.
- Make yourself familiar with [React](https://reactjs.org/), [Redux](https://redux.js.org/) and [styled-components](https://www.styled-components.com/) - the live editor examples are really helpful.
- On each commit [`husky`](https://github.com/typicode/husky) runs eslint and prettier.
- On each push `husky` executes `npm test`.
