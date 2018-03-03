说明
采用dva框架构建前端项目，但是采用的是react-router3，dva自带封装为router4版本不兼容且差别大

项目启动
进入项目后：
1.npm install 或者使用淘宝镜像 cnpm install (npm install -g cnpm 即可)
2.npm start 即可进入页面

项目架构
public
打包文件的存放地点
图片等需要使用相对路径访问的资源需要放到此处
src目录下
assets: 静态文件目录
components： 组件目录
page: 渲染界面
models :各界面数据库
services: 接口请求目录
utils: 公共接口

