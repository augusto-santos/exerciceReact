![Node](https://img.shields.io/badge/node-7.9.0-green.svg?style=flat) ![npm](https://img.shields.io/badge/npm-4.2.0-green.svg?style=flat) ![Webpack](https://img.shields.io/badge/Webpack-1.14.0-green.svg?style=flat) <img src="https://img.shields.io/github/stars/augusto-santos/exerciceReact.svg?style=social&label=Star&maxAge=3600" height="20"></a>

## TodoApp Frontend

**TodoApp** e uma aplicação web feita com apenas com [React](https://facebook.github.io/react/) sem o uso do [Redux](http://redux.js.org/), usando também a framework [Bootstrap](http://getbootstrap.com/getting-started/) para uma rapida implementação da aplicação.

![alt text](https://github.com/augusto-santos/exerciceReact/blob/master/documenta%C3%A7%C3%A3o/img/TodoApp.jpg "TodoApp")

### Recursos
+ [Webpack](https://webpack.js.org/) - Webpack & webpack-dev-server
+ [Babel](https://babeljs.io/) - Preset es2015 & react
+ [Axios](https://github.com/mzabriskie/axios) - Promise based HTTP client for the browser and node.js
+ [Bootstrap](http://getbootstrap.com/getting-started/) - CSS framework

#### Iniciando
  Instale as dependencias do [Node](https://nodejs.org/) com [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
```
npm install
||
yarn install
```


  Inicie a aplicação no **modo de desenvolvedor**
```
npm run dev
||
yarn dev
```
  A aplicação estará funcionando no [http://localhost:8080](http://localhost:8080)

  **Build de produção**
```
npm run production
||
yarn production
```
  Os arquivos de produção estarão na pasta __public__
