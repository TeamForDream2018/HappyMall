说明 <br/>
采用dva框架构建前端项目，但是采用的是react-router3，dva自带封装为router4版本不兼容且差别大<br/>
<br/>
项目启动<br/>
进入项目后：<br/>
1.npm install 或者使用淘宝镜像 cnpm install (npm install -g cnpm 即可)<br/>
2.npm start 即可进入页面<br/>
<br/>
项目架构<br/>
public<br/>
打包文件的存放地点<br/>
图片等需要使用相对路径访问的资源需要放到此处<br/>
src目录下<br/>
assets: 静态文件目录<br/>
components： 组件目录<br/>
page: 渲染界面<br/>
models :各界面数据库<br/>
services: 接口请求目录<br/>
utils: 公共接口<br/>

