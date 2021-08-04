import axios from "axios"

export const requestPostsAPI = () => axios.get('https://simple-blog-api.crew.red/posts')
                                       .then(res => res.data)

export const createPostAPI = (title:any, body:any) => axios.post('https://simple-blog-api.crew.red/posts', {
                                          title: title,
                                          body: body
                                       }).then(res => res)

export const deletePostAPI = (id:any) => axios.delete(`https://simple-blog-api.crew.red/posts/${id}`)
                                          .then(res => res)
