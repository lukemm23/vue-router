import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Jobs from '../views/jobs/Jobs.vue' 
import JobDetails from '../views/jobs/JobDetails.vue' 
import NotFound from '../views/NotFound.vue' 

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // demoing lazy loading components/routes
    component: ()=>import('../views/About.vue')
  },
  {
    path: '/jobs',
    name: 'Jobs',
    component: Jobs
  },
  {
    path: '/jobs/:id',
    name: 'JobDetails',
    component: JobDetails,
    // allowing sending to jobdetails page jod's id as props
    props:true
  },
  //redirect
  {
    path:'/all-jobs',
    redirect:'/jobs'
  },
  //catch all 404
  {
    path:'/:catchAll(.*)',
    name: 'NotFound',
    component:NotFound,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
