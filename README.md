This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

# 总览

> 直接运行此项目:
1. `npm install`
2. `npm run start`，你会进入白色页面。访问`http://localhost:3000/login-example`即可访问到我们的骨架页面。直接点击登录可想后台发送一个登录请求。

> 此处只展示前期开发过程中会使用到的文件

> `import * as example from './a'` 也就是导入a目录下的index.js文件。所以其恒等于`import * as example from './a/index.js'`
```
- src
   |
   |- config
   |  |- index.js  存放项目的配置，可在使用时引用。
   |
   |- components  此文件夹存放被多次使用的组件。比如边栏（其会在多个页面同时存在）。
   |   |- Header  此为具体的组件名，注意首字母大写，单词首字母也需要大写，如LeftSideBar。
   |      |- index.js  组件的入口，引用组件时即引用此文件	。
   |      |- index.css  组件的css样式。
   |
   |- containers  此文件夹存放具体的页面，比如登录，404页面等
   |  |- LoginExample  具体的页面名
   |     |- index.js  页面入口
   |     |- index.css  页面样式
   |
   |- request
   |  |- index.js  项目相关的所有HTTP请求均需在此处写成函数
   |
   |- App.js 项目的主入口，在此处配置路由等信息
```

> 开始`开发向导`之前，先看一看`src/containers/LoginExample/index.js`中的备注文字。

# 开发向导

## 新建页面

1. 新建页面需要在 `src/containers/`下新建文件夹（注意文件夹名首字母大写，字母之间）。
2. 将LoginExample文件夹下的`index.js`, `index.css`等文件作为项目骨架复制到新建的文件夹中。
3. 在src/App.js中导入该文件夹（仿照导入Login页面的代码）
4. 在src/App.js中添加一个路由并指定路由地址（注意地址有多个单词用`-`分隔）和组件（在这里也就是我们所说的页面）

此时，你就可以通过对应的链接比如`localhost:3000/login-example`访问到你刚刚创建的页面了。

## 发送请求

1. 导入`request`文件夹（也就是导入`request/index.js`），默认的骨架已经导入。
2. 在request/index.js文件底部添加一个对应的请求函数。如果在其他页面以及发送过你所需要发送请求，也就是已经存在对应的函数，则直接调用（注意函数的参数总有history并且在页面中调用此函数时需要参入对应的`this.props.history`）。
3. 在函数中调用`get`, `post`, `put`, `post`等方法即可（注意调用时需要传入`history`参数）。