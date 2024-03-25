
import MaxWidthWrapper from "@/components/helperComponents/MaxWidthWrapper/MaxWidthWrapper";
import PostContainer from "@/components/postComponents/PostContainer";

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
  
  const postId = await props.searchParams.postId
// console.log(postId)
  

    

 





  return (
    
    <MaxWidthWrapper>
    

    <div className="flex flex-col gap-5">
        <div className="">
          <div className="">
            <PostContainer postId ={postId} />
          </div>

        
        </div>

        {/* <AddComment postData ={postData[0]}/>

        <Comments postData = {postData[0]}/> */}
        
        </div>
        </MaxWidthWrapper>
  );
};

export default PostPage;
