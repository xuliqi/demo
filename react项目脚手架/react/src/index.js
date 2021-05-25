/*
 * @Author: 王新
 * @Date: 2020-07-21 15:13:01
 * @Description: 项目的入口文件
 */

import dva from "dva"

// 导入全局样式文件
import './style/common.scss'

const createHistory = require("history").createHashHistory // 使用hash路由

// 创建应用
const app = dva({ history: createHistory() })

// 注册model, 自动引入全局globalModel
app.model(require('./model/globalModel').default)

// 注册路由
app.router(require('./routers/index').default)

// 启动应用
app.start('#root')