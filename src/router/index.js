import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Welcome.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/house/:houseKey',
    name: 'house',
    component: () => import('../views/house.vue'),
    children: [
      { 
        path: 'info',
        component: () => import('../views/info.vue'),
      },
      { 
        path: 'disclosure',
        component: () => import('../views/disclosure.vue'),
      },
      { 
        path: 'informing',
        component: () => import('../views/informing.vue'),
      },
      { 
        path: 'debtors',
        component: () => import('../views/debtors.vue'),
      },
      { 
        path: 'answers',
        component: () => import('../views/answers.vue'),
      },
      { 
        path: 'contacts',
        component: () => import('../views/contacts.vue'),
      },
      { 
        path: 'documents',
        component: () => import('../views/documents.vue'),
      },
    ]
  },
  
  // ,
  // {
  //   path: '/infoDoc',
  //   name: 'InfoDoc',
  //   component: () => import('../views/Info.vue'),
  // },
  // {
  //   path: 'documents/:routeParams}',
  //   name: 'InfoDoc',
  //   component: () => import('../views/Info.vue'),
  // },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
  routes
})

export default router
