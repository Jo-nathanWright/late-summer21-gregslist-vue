<template>
      <div class="house m-2 bg-light shadow">
        <!-- passing required param ':id' -->
        <router-link :to="{name: 'HouseDetails', params: {id: house.id}}">
          <img :src="house.imgUrl" class="w-100" alt="house">
          <div class="p-3">
              <div class="text-center">
                  <p><b>{{house.levels}} Floors - {{house.bedrooms}} Bedrooms - {{house.bathrooms}} Bathrooms</b></p>
              </div>
          </div>
        </router-link>
      </div>
</template>

<script>
export default {
  props: {
    house:{
      type: Object,
      required: true
    }
  },
  setup() {
    return {}
  }
}
</script>