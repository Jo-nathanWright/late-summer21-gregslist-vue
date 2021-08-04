import { reactive } from "vue"

export const AppState = reactive({
  cars: [],
  houses: [],
  jobs: [],
  activeCar: {},
  activeHouse: {},
  activeJobs: {}
})