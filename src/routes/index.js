import Layout from '../views/layout/Layout.vue'
import Home from '../views/home/Home.vue'

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [{
      path: 'home',
      component: Home
    }]
  }
]

export default routes