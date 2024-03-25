
const getData = async (postId:any) => {
    
 
    
    const res = await fetch(`http://localhost:3000/api/getPostByPostId?postId=${postId}`, {
      cache: "no-store",
    });
    
    if (!res.ok) {
      throw new Error("Failed");
    }
  
    return res.json();
  };
const PostPageComponent= async  (props:any)=>{
  console.log(props)
const postData = await getData(props.se)
    
    return(

      // <div className="flex flex-col gap-5">
      //   <div className="">
      //     <div className="">
      //       <PostContainer postData ={postData[0]} />
      //     </div>
      //   </div>

      //   <AddComment postData ={postData[0]}/>


      //   <Comments postData={postData[0] />
      //   </div>
      <div className="">asd</div>
      
    
    )
}

export default PostPageComponent