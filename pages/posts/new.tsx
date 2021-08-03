import MainContainer from "../../Components/MainContainer";

const New = () => {
   return (
      <MainContainer>
         <label htmlFor={"new-post"}>Share your thoughts</label>
         <input className="new-post"/>
         <button>Post</button>
         <h1>
            New post
         </h1>
      </MainContainer>
   )
}

export default New;
