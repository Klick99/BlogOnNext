import {useRouter} from 'next/router'
import MainContainer from "../../Components/MainContainer";

export default function postId (){
   // eslint-disable-next-line react-hooks/rules-of-hooks
   const {query} = useRouter()
    console.log(query)
   return (
      <MainContainer>
         <h1>Hello</h1>
      </MainContainer>
   )
};
