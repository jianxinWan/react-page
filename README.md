# react-page

## 目录结构

```
.
├─ build/                      # Webpack构建目录
│   ├─ paths                   # 引用的路径
│   ├─ webpack.config.js       # dev模式下
│   ├─ webpack.config.base.js  # webpack基础配置，公共部分
|   ├─ webpack.config.prod.js  # 生产环境配置
|   ├─ proxy.js                # 代理设置
|   ├─ devServer.js            # 开发环境下的服务
├─ dist/                       # build 生成的生产环境下的项目
├─ src/                        # mock数据
├─ src/                        # 源码目录
│   ├─ assets/                 # images
│   ├─ components/             # 组件（COMPONENT）
│   ├─ const/                  # 常量集中管理
│   ├─ containers/             # 容器
│   ├─ reducers/               # 函数因子
│   ├─ routers/                # 路由
│   ├─ saga/                   # 路由视图基页（VIEW）
│   ├─ server/                 # 网络请求提取
│   ├─ utils/                  # 公用方法封装提13108348693﻿取
│   ├─ index.js                # 主入口文件
├── index.html                 # 静态模板页面，开发和build产出，都依赖它
├── .babelrc                   # Babel 转码配置
├── .eslintignore              # ESLint 检查中需忽略的文件（夹）
├── .eslintrc                  # ESLint 配置
├── .gitignore                 # git忽略提交
├── .postcssrc.js              # postcss配置项，vue-cli产出
├── package.json               # 很重要的东西了
```