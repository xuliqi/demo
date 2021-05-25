// import Home from '../views/Home.vue'
// const Home = () => import( /* webpackChunkName: "home1234" */ '../views/Home.vue')
const Home = () => import( /* webpackChunkName: "home" */ '../views/Home/index.vue')
const Brother = () => import( /* webpackChunkName: "home" */ '../views/Brother/index.vue')

const routes = [
    { path: '/', redirect: '/home' },
    { path: '/home', component: Home },
    { path:'/brother', component: Brother }
]

export default routes