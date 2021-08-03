import Link from 'next/link'
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../redux/redux-store";
import {useEffect} from "react";
import {requestPostsThank} from "../redux/redusors/redusor";

const Posts = () => {
   const dispatch = useDispatch()
   const posts = useSelector((state: AppStateType) => state.postsReducer.posts)
   console.log(posts)

   useEffect(() => {
      dispatch(requestPostsThank())
   }, [])

   return (
      <>
         <h1>
            List of Posts
         </h1>
         <article>
            {posts.map(post =>
               <section key={post.id}>
                  <Link href={`/posts/${post.id}`}>
                     <h5>{post.title}</h5>
                  </Link>
                  <span>{post.body}</span>
               </section>
            )}
         </article>
      </>
   )
}

export default Posts;
