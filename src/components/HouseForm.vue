<template>
  <div class="house-form">
    <form class="d-flex" @submit.prevent="createHouse">
      <div class="form-group">
        <label for="bedrooms">Bedrooms</label>
        <input
          type="number"
          name="bedrooms"
          v-model="state.newHouse.bedrooms"
          class="form-control"
          placeholder="Amount of Bedrooms..."
          required
          min="1"
        />
      </div>
      <div class="form-group">
        <label for="bathrooms">Bathrooms</label>
        <input
          type="number"
          name="bathrooms"
          v-model="state.newHouse.bathrooms"
          class="form-control"
          placeholder="Amount of Bathrooms..."
          required
          min="1"
        />
      </div>
      <div class="form-group">
        <label for="levels">Levels</label>
        <input
          type="number"
          name="levels"
          v-model="state.newHouse.levels"
          class="form-control"
          placeholder="How many Stories..."
          required
          min="1"
        />
      </div>
      <div class="form-group">
        <label for="price">Price</label>
        <input
          type="number"
          name="price"
          v-model="state.newHouse.price"
          class="form-control"
          placeholder="Price..."
          required
          min="1"
        />
        </div>
        <div class="form-group">
        <label for="year">Year</label>
        <input
          type="number"
          name="year"
          v-model="state.newHouse.year"
          class="form-control"
          placeholder="Year..."
          required
          min="1700"
          max="2021"
        />
      </div>
      <div class="form-group">
        <label for="imgUrl">Image Url</label>
        <input
          type="text"
          name="imgUrl"
          v-model="state.newHouse.imgUrl"
          class="form-control"
          placeholder="Url..."
        />
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <input
          type="text"
          name="description"
          v-model="state.newHouse.description"
          class="form-control"
          placeholder="Description..."
          maxlength="240"
        />
      </div>
      <div class="d-flex align-items-center">
        <button type="submit" class="btn btn-outline-success">Add</button>
      </div>
    </form>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import {housesService} from '../services/HousesService'
export default {
  setup() {
    const state = reactive({
      newHouse: {}
    })
    return{ 
      state,
      async createHouse(){
        try {
          await housesService.create(state.newHouse)
          state.newHouse = {}
        } catch (error) {
          console.log(error)
        }
      }
    }
  }
}
</script>