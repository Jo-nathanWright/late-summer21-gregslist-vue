import { AppState } from "../AppState"
import { sandbox } from "../services/AxiosService"

class JobsService{
  async getAll() {
    let res = await sandbox.get('/jobs')
    AppState.jobs = res.data
  }
  async getById(id) {
    let res = await sandbox.get(`/jobs/${id}`)
    AppState.activeJobs = res.data
  }
  async create(job) {
    let res = await sandbox.post('jobs/', job)
    AppState.jobs.push(res.data)
    return res.data.id
  }
  async destroy(id) {
    await sandbox.delete(`jobs/${id}`)
    AppState.jobs = AppState.jobs.filter(job => job.id !== id)
  }
}

export const jobsService = new JobsService()