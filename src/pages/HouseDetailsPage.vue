<template>
  <div class="house-details-page">
    <h1>Welcome to the house details</h1>
    <p>{{house.levels}} Floors - {{house.bedrooms}} Bedrooms- {{house.bathrooms}} Bathrooms</p>
    <br>
    {{house.description}}
  <br>
    <button class="btn btn-danger" @click="destroy">Delete</button>
  </div>
</template>

<script>
import {computed, onMounted} from '@vue/runtime-core'
import {AppState} from '../AppState.js'
import {housesService} from '../services/HousesService'
import {useRoute, useRouter} from 'vue-router'
export default {
  setup() {
    const route = useRoute()
    const router = useRouter()
    onMounted(async ()=> {
      try {
        await housesService.getById(route.params.id)
      } catch (error) {
        console.log(error);
      }
    })
    return {
      house: computed(() => AppState.activeHouse),
      async destroy(){
        try {
          await housesService.destroy(route.params.id)
          router.push({name: 'House'})
        } catch (error) {
          console.log(error);
        }
      }
    }
  },
}
</script>