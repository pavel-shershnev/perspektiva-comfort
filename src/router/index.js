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
        name: 'info',
        path: 'info',
        component: () => import('../views/info.vue'),
        meta: {
          selectedItem: 1
        }
      },
      { 
        name: 'disclosure',
        path: 'disclosure',
        component: () => import('../views/disclosure.vue'),
        meta: {
          selectedItem: 2
        }
      },
      { 
        name: 'informing',
        path: 'informing',
        component: () => import('../views/informing.vue'),
        meta: {
          selectedItem: 3
        }
      },
      { 
        name: 'debtors',
        path: 'debtors',
        component: () => import('../views/debtors.vue'),
        meta: {
          selectedItem: 4
        }
      },
      { 
        name: 'answers',
        path: 'answers',
        component: () => import('../views/answers.vue'),
        meta: {
          selectedItem: 5
        }
      },
      { 
        name: 'contacts',
        path: 'contacts',
        component: () => import('../views/contacts.vue'),
        meta: {
          selectedItem: 6
        }
      },
      { 
        name: 'documents',
        path: 'documents',
        component: () => import('../views/documents.vue'),
        meta: {
          selectedItem: 7
        }
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
  linkActiveClass: 'active-class',
  linkExactActiveClass: 'active-class',
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

export default router
