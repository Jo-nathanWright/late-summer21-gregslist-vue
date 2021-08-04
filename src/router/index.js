import { createRouter, createWebHashHistory } from 'vue-router'
import CarDetailsPage from '../pages/CarDetailsPage.vue'
import HouseDetailsPage from '../pages/HouseDetailsPage.vue'
import Car from '../pages/Car.vue'
import House from '../pages/House.vue'


const routes = [
  {
    path: '/car',
    name: 'Car',
    component: Car
  }, {
    // required param ':id'
    path: '/car-details/:id',
    name: 'CarDetails',
    component: CarDetailsPage
  },
  {
    path: '/house',
    name: 'House',
    component: House
  }, {
    path: '/house-details/:id',
    name: 'HouseDetails',
    component: HouseDetailsPage
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
