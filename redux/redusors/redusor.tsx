import {requestPostsAPI, createPostAPI, deletePostAPI} from '../../api/api'

export type stateType = Array<posts>
type posts = {
   id: number,
   title: string,
   body: string
}

const newState:any = {
   posts: [],
}

/*type actionType = {
   type: string
}*/

export const requestPostsThank = () => {
   return async (dispatch: any) => {
      let data = await requestPostsAPI()
      dispatch(actions.requestPosts(data))
   }
}

export const createPostThank = (title:any, body:any) => {
   return async (dispatch: any) => {
      let post = await createPostAPI(title, body)
      dispatch(actions.addNewPost(post.data))
      console.log(post.data)
   }
}

export const deletePostsThank = (id:any) => {
   return async (dispatch: any) => {
      let delResponse = await deletePostAPI(id)
      /*if ()*/
      console.log(delResponse)
      /*dispatch(actions.deletePost(id))*/
   }
}

export const actions = {
   requestPosts: (posts: any) => ({type: 'REQUEST_A_POSTS', posts} as const),
   addNewPost: (post:any) => ({type: 'CREATE_A_POST', post} as const),
   deletePost: (id:any) => ({type: 'DELETE_A_POST', id} as const)
}

export const postsReducer = (state = newState, action:any /*:actionType*/): any  => {
   switch (action.type) {
      case 'REQUEST_A_POSTS': {
         return {...state, posts:action.posts}
      }
      case 'CREATE_A_POST': {
         return {
            posts: [ ...state.posts, {
               id: action.post.id,
               title: action.post.title,
               body: action.post.body
            }]}
      }
      case 'DELETE_A_POST': {
         return {posts: state.posts.filter((e:any) => e.id === !action.id)}
      }
      case 'UPDATE_A_POST': {
         return {...state}
      }                                            // maybe
      default : return state
   }
}
