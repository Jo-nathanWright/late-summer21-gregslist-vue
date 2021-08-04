<template>
  <div class="job-form">
    <form class="d-flex" @submit.prevent="createJob">
      <div class="form-group">
        <label for="company">Company</label>
        <input
          type="text"
          name="company"
          v-model="state.newJob.company"
          class="form-control"
          placeholder="Your Company..."
          required
        />
      </div>
      <div class="form-group">
        <label for="jobTitle">Job Title</label>
        <input
          type="text"
          name="jobTitle"
          v-model="state.newJob.jobTitle"
          class="form-control"
          placeholder="The Job Title..."
          required
        />
      </div>
      <div class="form-group">
        <label for="hours">Hours</label>
        <input
          type="number"
          name="hours"
          v-model="state.newJob.hours"
          class="form-control"
          placeholder="Amount of Hours..."
          required
          min="1"
        />
      </div>
      <div class="form-group">
        <label for="rate">Rate</label>
        <input
          type="number"
          name="rate"
          v-model="state.newJob.rate"
          class="form-control"
          placeholder="rate..."
          required
          min="1"
        />
        </div>
      <div class="form-group">
        <label for="description">Description</label>
        <input
          type="text"
          name="description"
          v-model="state.newJob.description"
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
import {jobsService} from '../services/JobsService'
export default {
  setup() {
    const state = reactive({
      newJob: {}
    })
    return{
      state,
      async createJob(){
        try {
        await jobsService.create(state.newJob)
        state.newJob = {}
        } catch (error) {
          console.log(error);
        }
      }
    }
  }
}
</script>