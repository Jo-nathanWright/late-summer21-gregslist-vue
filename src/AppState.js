import { reactive } from "vue"

export const AppState = reactive({
  cars: [],
  houses: [],
  activeCar: {},
  activeHouse: {}
})