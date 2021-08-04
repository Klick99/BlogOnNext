import {useRouter} from 'next/router'
import MainContainer from "../../Components/MainContainer";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/redux-store";

export default function postId (){
   // eslint-disable-next-line react-hooks/rules-of-hooks
   const {query} = useRouter()
    console.log(query)
   // eslint-disable-next-line react-hooks/rules-of-hooks
   const post = useSelector((state: AppStateType) => state.postsReducer.posts
                           /*.filter((e:any) => e.id === query.id)*/)
   console.log(post)
   return (
      <MainContainer>
         <article>
            <section>
               <h1>{post.title}</h1>
               <span>{post.body}</span>
            </section>
            <section>
               <button>Delete post</button>
               <button>Update post</button>
            </section>
         </article>
      </MainContainer>
   )
};
