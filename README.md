# parcel-vue
[parcel](http://www.css88.com/doc/parcel/)最近超火爆的0配置web打包工具,记录一下parcel中vue的配置

## 首先需要我们初始化一个项目

```javascript
  mkdir parcel-vue
  cd parcel-vue
  npm init -y
```

## 创建文件目录
* src
    *  assets  //静态文件
    *  components //.vue模块
    *  scss //css样式
    *  App.vue 
    *  main.js
* index.html //parcel入口文件(parcel入口文件既可以是.html,也可以是.js)
* package.json 

## 添加parcel依赖
```javascript
  npm install -g parcel-bundler
```
```javascript
  npm install vue vue-router --save
```
```javascript
  npm install autoprefixer babel-polyfill babel-preset-env parcel-bundler parcel-plugin-vue postcss-modules vue-hot-reload-api vue-loader vue-style-loader vue-template-compiler --save-dev
```
也可以用yarn和淘宝的cnpm

## 修改package.json配置
```javascript
  "scripts": {
    "dev": "parcel index.html -p 8080",  //-p改端口
    "build": "parcel build index.html"
  },
```

以下配置出自[parcel](http://www.css88.com/doc/parcel/transforms.html)
## Babel（babel-preset-env）
Babel 是一个流行的 JavaScript 转译器，拥有大量的插件生态系统。在 Parcel 中使用 Babel 的方式与其单独使用或与其他打包器配合使用的方式相同。
然后，创建一个 .babelrc 文件：

```javascript
  {
    "presets": ["env"]
  }
```

## PostCSS（postcss-modules autoprefixer）
PostCSS 是一个用插件转换 CSS 的工具，比如 autoprefixer, cssnext, 和 CSS Modules。 您可以使用以下名称之一创建配置文件，从而使 Parcel 使用 PostCSS 配置 ： .postcssrc (JSON), .postcssrc.js, 或者 postcss.config.js.
然后，创建一个 .postcssrc 文件：
```javascript
  {
    "modules": true,
    "plugins": {
        "autoprefixer": {
        "grid": true
        }
    }
   }
```
插件指定在 plugins 对象的 key 中，并选项定义使用对象值。 如果插件没有选项，只需将其设置为 true 即可。
Autoprefixer ， cssnext 和其他工具的目标浏览器可以在 .browserslistrc 文件中指定：

```javascript
  > 1%
  last 2 versions
```
CSS Modules 的启用方式稍有不同，在顶级 modules key 上使用。这是因为 Parcel 需要对 CSS Modules 有特殊的支持，因为它们也会导出一个对象，包含到 JavaScript 包中。请注意，你仍然需要在你的项目中安装 postcss-modules 。

## PostHTML
PostHTML 是一个用插件转换 HTML 的工具。您可以使用以下名称之一创建配置文件，从而使 Parcel 使用 PostHTML 配置 ：.posthtmlrc (JSON), posthtmlrc.js, 或者 posthtml.config.js.

在你的应用程序中安装插件：
yarn add posthtml-img-autosize
然后，创建一个 .posthtmlrc 文件：

```javascript
{
  "plugins": {
    "posthtml-img-autosize": {
      "root": "./images"
    }
  }
}
```
插件指定在 plugins 对象的 key 中，并选项定义使用对象值。 如果插件没有选项，只需将其设置为 true 即可。
