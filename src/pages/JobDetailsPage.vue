<template>
  <div class="job-details-page">
    <h1>Welcome to the job details</h1>
    <p>{{job.company}} - {{job.jobTitle}}</p>
    <p>{{job.hours}} hours - {{job.rate}} rate</p>
    <br>
    {{job.description}}
  <br>
    <button class="btn btn-danger" @click="destroy">Delete</button>
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import { useRoute, useRouter } from 'vue-router'
import { jobsService } from '../services/JobsService'
import { AppState } from '../AppState.js'
export default {
  setup() {
    const route = useRoute()
    const router = useRouter()
    onMounted(async()=> {
      try {
        await jobsService.getById(route.params.id)
      } catch (error) {
        console.log(error);
      }
    })
    return {
      job: computed(() => AppState.activeJobs),
      async destroy(){
        try {
          await jobsService.destroy(route.params.id)
          router.push({name: 'Job'})
        } catch (error) {
          console.log(error);
        }
      }
    }
  }
}
</script>