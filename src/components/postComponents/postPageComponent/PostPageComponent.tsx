import MaxWidthWrapper from "@/components/helperComponents/MaxWidthWrapper/MaxWidthWrapper";
import PostContainer from "../PostContainer";
import AddComment from "../addComment/AddComment";
import Comments from "../comments/Comments";
const getData = async (postId:any) => {
    
 
    
    const res = await fetch(`http://localhost:3000/api/getPostByPostId?postId=${postId}`, {
      cache: "no-store",
    });
    
    if (!res.ok) {
      throw new Error("Failed");
    }
  
    return res.json();
  };
const PostPageComponent= async (props:any)=>{

     const postData = await getData(props.postId)
    return(
<MaxWidthWrapper>
      <div className="flex flex-col gap-5">
        <div className="">
          <div className="">
            <PostContainer postData ={postData[0]} />
          </div>
        </div>

        <AddComment postData ={postData[0]}/>


        <Comments postData={postData[0]} />


       




      
      </div>
     {/* {props.searchParams.postId} */}
    </MaxWidthWrapper>
    )
}

export default PostPageComponent