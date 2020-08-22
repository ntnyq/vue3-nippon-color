/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import type { RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
]

export default routes
