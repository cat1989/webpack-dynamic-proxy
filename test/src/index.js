import axios from 'axios'

axios.get('/api/users').then((res) => res.data).then((res) => {
    console.log(res)
})
