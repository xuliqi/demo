
const route = [
    // {
    //     path: "/HomeList",
    //     models:() => [import("../model/myModel")],
    //     component: () => import("../pages/HomeList")
    // }, //首页列表
    {
        path: "/HomeList",
        models: () => [import("../model/myModel")],
        component: () => import('../pages/HomeList'),
        children: [
            {
                path: "/HomeList/test",
                component: () => import('../pages/Test'),
            }
        ]
    }, //子路由    在父组件中的使用方法：{this.props.children}
]

export default route
