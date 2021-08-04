<template>
  <div class="home container-fluid">
    <div class="row">
      <div class="col">
        <JobForm />
      </div>
    </div>
    <div class="row">
      <div class="col-2" v-for="j in jobs" :key="j.id">
        <!-- Data passed through prop ':car' to child -->
        <JobCard :job="j"/>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import { jobsService } from '../services/JobsService'
import { AppState } from '../AppState'
import JobForm from '../components/JobForm.vue'
import JobCard from '../components/JobCard.vue'
export default {
  name: 'Job',
  setup() {
    onMounted(async ()=> {
      try {
        await jobsService.getAll()
      } catch (error) {
        console.log(error);
      }
    })
    return {
      jobs: computed(() => AppState.jobs)
    }
  },
  components: {
    JobCard,
    JobForm
  }
}
</script>