import axios from 'axios'

export default axios.create({
    baseURL:"https://api.unsplash.com",
    headers:{
        Authorization: 'Client-ID T5PebRplSNqloiQ0dztvLJ9Hr_daYD5pIddr5d27r5Y'
      }
})