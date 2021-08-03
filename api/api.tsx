import axios from "axios"

const requestPostsAPI = () => axios.get('https://simple-blog-api.crew.red/posts').then(res => res.data)

export default requestPostsAPI
