
import React from 'react';
import { Router, Route, Switch, Redirect } from 'dva/router'
import dynamic from 'dva/dynamic'

import router1 from './router1'
import router2 from './router2'
import router3 from './router3'
import router4 from './router4'

const allRouter = [...router1, ...router2, ...router3, ...router4]

/* 不具备子路由 */
// function RouterComponent({ history, app }) {
//     return (
//         <Router history={history}>
//             <Switch>
//                 {
//                     allRouter.map(({ path, ...dynamics }, index) => (
//                         <Route key={index} path={path} exact component={dynamic({ app, ...dynamics })} />
//                     ))
//                 }
//                 <Redirect from="/" to="/HomeList" />
//             </Switch>
//         </Router>
//     )
// }


// 递归实现路由的方法
function mapRouteMethod(routeArr, app) {
    return routeArr.map(({ path, children, ...dynamics }, index) => {
        if (children) {
            return <Route key={index} path={path} render={(props) => {
                const Component = dynamic({ app, ...dynamics })
                return (<Component {...props}> {mapRouteMethod(children, app)} </Component>)
            }} />
        }
        return <Route key={index} path={path} exact component={dynamic({ app, ...dynamics })} />
    })
}

// 路由渲染组件
function RouterComponent({ history, app }) {
    return (
        <Router history={history}>
            <Switch>
                {mapRouteMethod(allRouter, app)}
                <Redirect exact from="/" to="/HomeList" />
            </Switch>
        </Router>
    )
}

export default RouterComponent