# node-express-mongoose-photoDemo
An example of uploading and downloading photos using nodejs and express and mongoose 

## 前序准备

你需要在本地安装 [node](http://nodejs.org/) 和 [mongodb](https://www.mongodb.com/download-center/community)。
本项目技术栈基于 [ES2015+](http://es6.ruanyifeng.com/)，[express](http://expressjs.com/)，[ejs](https://ejs.bootcss.com/)， [mongoose](http://www.mongoosejs.net/)，提前了解和学习这些知识会对使用本项目有很大的帮助。

## 说明

1. 本demo是使用express生成的一个ejs模板引擎项目；
2. 页面由服务端渲染，前后台不分离；
3. 使用原生的form表单实现上传图片；
4. 使用node的API有fs、path，给图片重命名，以及修改保存路径；
5. 使用插件silly-datetime格式化日期；
6. 使用插件morgan进行日志输出；
7. 使用插件formidable获取表单提交内容。

## 开发

```bash
# 克隆项目
git clone https://github.com/learnMores/node-express-mongoose-photoDemo.git

# 进入项目目录
cd node-express-mongoose-photoDemo

# 安装依赖
npm install

# 启动服务
npm start
```

本地浏览器访问 http://localhost:3000
