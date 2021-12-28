import Layout from '../views/layout/Layout.vue'
import Home from '../views/home/Home.vue'
import Course from '../views/course/Course.vue'

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [{
      path: 'home',
      component: Home
    },{
      path: 'video/:id',
      component: Course
    }]
  }
]

export default routes