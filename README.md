staticPageGulp是一套利用Gulp打包工具，旨在提高静态页面开发效率、快速生成模板、开发的工具

####克隆本仓库

在开发目录下执行：

````
git clone https://github.com/TonyXY/staticPageGulp.git
````

####安装Npm依赖包

详细的依赖包清单请参考`package.json`文件，Gulp相关配置请看`gulpfile.js`

````
npm install
````

安装完毕之后，你将得到如下的文件结构

####文件结构

静态页面不需要太过复杂的文件结构，最终的发布版本代码和相关文件全部在`build`文件夹中。为了后续维护方便，请适当做好相应的注释和文档。

````
newProject/
|
|-----dist //最终生成的纯净文件夹
|
|-----css //  样式表开发目录
|
|-----js //JavaScript相关
|
|----- .node_modules / // npm安装依赖包所在文件夹
|
|-----.gitignore // 默认使用git，配置好gitignore文件
|-----Gulpfiles.js // gulp配置文件 建议先阅读配置
|-----package.json //gulp依赖包配置文件

````
####初始化

git clone下来后，可以将`staticPage、Gulp`文件夹修改成项目的文件名，建议初始化时可执行一次:

````
gulp
````

#####实时预览

````
gulp watch-dev
````
自动打开浏览器访问index.html，并监听开发目录下(newProject/)html/css/js/image的修改并实时预览

````
gulp watch
````
自动打开浏览器访问index.html，并监听生产目录下（dist/）html/css/js/image的修改并实时预览

####说明

此工具适合简单静态页项目，可根据自己项目需求配置.

#### License

Released under [MIT] LICENSE
