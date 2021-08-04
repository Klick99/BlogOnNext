import MainContainer from "../../Components/MainContainer";
import {createPostThank} from "../../redux/redusors/redusor";
import React, {useState} from "react";
import {useDispatch} from "react-redux";

const New = () => {
   const [title, setTitle] = useState('')
   const [body, setBody] = useState('')
   const dispatch = useDispatch()
   let handleChangeTitle = (e:any) => {
      setTitle(e.currentTarget.value)
   }
   let handleChangeBody = (e:any) => {
      setBody(e.currentTarget.value)
   }

   let handleSubmit = (e:any) => {
      e.preventDefault()
      dispatch(createPostThank(title, body))
      console.log(title, body)
      setTitle('')
      setBody('')
   }

   return (

      <MainContainer>
         <form onSubmit={handleSubmit}>
            <label htmlFor={"new-post-title"}>Title your post:</label>
               <input className="new-post-title"
                      type="text"
                      value={title}
                      onChange={handleChangeTitle}
               />
            <label htmlFor={"new-post-body"}>Share your thoughts:</label>
               <input className="new-post-body"type="text"
                      value={body}
                      onChange={handleChangeBody}
               />
            <button>Create Post</button>
         </form>
      </MainContainer>
   )
}

export default New;
