import requestPostsAPI from '../../api/api'

export type stateType = Array<posts>
type posts = {
   id: number,
   title: string,
   body: string
}

const newState = {
   posts: []
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

export const actions = {
   requestPosts: (posts: any) => ({type: 'REQUEST_A_POST', posts} as const),
}

export const postsReducer = (state = newState, action:any /*:actionType*/): any  => {
   switch (action.type) {
      case "REQUEST_A_POST": {
         return {...state, posts:action.posts}
      }
      case "CREATE_A_POST": {
         return {...state}
      }
      case "DELETE_A_POST": {
         return {...state}
      }
      case "UPDATE_A_POST": {
         return {...state}
      }                                            // maybe
      default : return state
   }
}
