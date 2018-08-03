# **量投组件库**
## 快速上手
-----
QuantDo Desigh，一个服务于**量投**的设计体系，追求更好的用户体验，提高程序员的开发效率，并统一UI开发规范。
> 开始之前，推荐先学习**React**和**ES2015**并且正确安装了**Node.js**环境。

-----
## 第一个本地实例
实际项目开发中，你会需要对ES2015和JSX代码的构建、调试、代理、打包部署等一系列工程化的需求。我们可以里哟个**creat-react-app来创建一个新的react项目，并在项目中音乐QuantDo Desigh组件。

### 1. 安装脚手架工具
create-react-app安装起来比较简单，只需要一条命令。
```
npm install -g create-react-app
```
### 2. 创建一个项目.
安装完成后，生成一个新的项目,工具会自动初始化一个脚手架并安装 React 项目的各种必要依赖，可以使用一下命令:
```
create-react-app my-app
cd my-app/
```
### 3. 启动项目
进入项目目录后，执行以下命令，此时浏览器会访问 [http://localhost:3000/](http://localhost:3000/)，看到 Welcome to React 的界面就算成功了。
## create-react-app项目添加less配置
-----
Quantdo Design支持主题切换，所以需使用less加载样式。使用create-react-app 创建的项目默认不支持less，以下增加less配置的步骤
> 如需了解less，请戳这里[less](http://lesscss.cn/)
### 1. 暴露配置文件
create-react-app生成的项目文，看不到webpack相关的配置文件，需要先暴露出来，使用如下命令即可：
```
npm run eject
```
### 2. 安装less-loader 和 less
```
npm install less-loader less --save-dev
```
### 3. 修改webpack配置
修改config文件夹中 webpack.config.dev.js 和 webpack.config-prod.js 配置文件，将两个文件中的`test: /\.css$/` 改为 `test: /\.(css|less)$/`，并在两个文件中的`test: /\.css$/` 下方的`use`数组增加如下配置项。
```
{
    loader:require.resolve('less-loader'),
    options: { javascriptEnabled: true }
}
```
### 4. 使用babel-plugin-import进行按需加载
从Quantdo Design中引入所需组件时，可以只引入所需类中的某个组件，不必引整个组件，babel-plugin-import 是一个用于按需加载组件代码和样式的 babel 插件。
```
npm install babel-plugin-import --save-dev
```
安装完成后在根目录my-app下创建一个文件.babelrc，在文件中写入如下配置：
```
{
    "presets": ["react-app"],
    "plugins":[["import", {"libraryName": "quant-ui"}]]
}
```
### 5. 安装Quantdo Design组件
执行以下命令，下载Quantdo Desigh组件
```
npm install quant-ui
```
接下来，我们还需要引入Quantdo Design的样式文件，在`App.less`的第一行加入以下代码：
```
@import '~quant-ui/lib/theme/index.less';
```
### 6. 使用Quantdo Design组件
现在我们就可以使用Quantdo Desigh组件啦，将App.js替换成下面的代码看看效果吧。
```
import React, { Component } from 'react';
import logo from './logo.svg';
import {Calendar } from 'quant-ui'
import './App.less';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div style =  {{ width: 300, border: '1px solid #d9d9d9', borderRadius: 4 }}>
            <Calendar width={500} fullscreen={false}/>
        </div>
      </div>
    );
  }
}
export default App;
```
