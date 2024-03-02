
import PostPageComponent from "@/components/postComponents/postPageComponent/PostPageComponent";

const baseURL = process.env.NEXTAUTH_URL
const getData = async (postId:any) => {
    
 
    
  const res = await fetch(`http://localhost:3000/api/getPostByPostId?postId=${postId}`, {
    cache: "no-store",
  });
  
  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};




const PostPage = async (props:any) => {
  
  // const postData = await getData(props.searchParams.postId)
// console.log(postData)
  

    


 





  return (
    <PostPageComponent postId={props.searchParams.postId}/>
  );
};

export default PostPage;
