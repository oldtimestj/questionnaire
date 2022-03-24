<!--
 * @Description: 
 * @version: 
 * @Author: tjwang
 * @Date: 2022-03-24 14:56:22
 * @LastEditors: tjwang
 * @LastEditTime: 2022-03-24 21:10:30
-->

                                                              问卷系统文档说明

### 1、代码

- nodeExpress   

  后端代码，包含接口、数据库连接和操作等。

- nodeVue   前端代码

  前端页面具体实现

### 2、部署文档

 #### 1、将后端代码中`wenjuan.sql`信息新建数据库，保证数据库名称、端口号正确，也可参照==/nodeExpress/sql/dbConfig.js==文件进行配置；

#### 2、后端代码中`sys_user.txt`和`questionnaire.txt`两张表导入到数据库中；

###3、在==/nodeExpress==路径下执行`npm install`命令安装后端相关依赖；

### 4、在当前路径下执行`nodemon app.js`或者`node app.js`启动后端服务；

###5、切换到==/nodeVue==路径下执行`npm install`命令安装相关前端依赖；

### 6、在当前路径下执行`npm run dev`命令启动前端服务

### 3、项目说明

1、项目实现登录验证，针对普通用户路由到问卷调查页面，管理员用户不做问卷调查，具备用户管理功能

2、项目目前暂未实现路由鉴权、token验证等功能





