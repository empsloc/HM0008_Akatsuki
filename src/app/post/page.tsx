
import MaxWidthWrapper from "@/components/helperComponents/MaxWidthWrapper/MaxWidthWrapper";
import PostContainer from "@/components/postComponents/PostContainer";
import AddComment from "@/components/postComponents/addComment/AddComment";
import Comments from "@/components/postComponents/comments/Comments";
const baseURL = process.env.NEXTAUTH_URL;
const getData = async (postId:any) => {
    
 
    
  const res = await fetch(`${baseURL}/api/getPostByPostId?postId=${postId}`, {
    cache: "no-store",
  });
  
  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};




const PostPage = async (props:any) => {
  
  const postData = await getData(props.searchParams.postId)
// console.log(postId)
  

    

 





  return (
    
    <MaxWidthWrapper>
    

    <div className="flex flex-col gap-5">
        <div className="">
          <div className="">
            <PostContainer postData ={postData[0]} />
          </div>

        
        </div>

        <AddComment postData ={postData[0]}/>

        <Comments postData = {postData[0]}/>
        
        </div>
        </MaxWidthWrapper>
  );
};

export default PostPage;
