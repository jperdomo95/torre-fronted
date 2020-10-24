import axios from 'axios'
const API_URL = 'https://test.caribito.com/api/jobs'

function getJobsService () {
  return axios.get(API_URL)
}

export { getJobsService }
