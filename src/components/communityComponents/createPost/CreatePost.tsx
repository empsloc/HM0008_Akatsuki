"use client"

import { GalleryHorizontal, Plane } from "lucide-react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";


const CreatePost = (props:any) => {
  const router = useRouter();
  
  const {  data: session, status } = useSession();
  const [title, setTitle] = useState("")
  const [details, setDetails] = useState("")
  const handleSubmit  = async (title:any, details:any, userEmail:any, communityId:any) => {
 
    await fetch("/api/postPost", {
      method: "POST",
      body: JSON.stringify({title:title, details:details, userEmail:userEmail, communityId:communityId}),
    });
   
    router.push("/")
    
   
  };
  return (
    <div className="">
    {(status==="authenticated")?(<div className="">
    <div className="md:pl-20">
      <div className="p-5 flex flex-col gap-5 bg-secondary rounded-2xl shadow-md">
        <div className="font-semibold">Create Post</div>
        <div className="h10">
        <input
          className=" mx-20 dark:placeholder-white bg-transparent border-none outline-none  text-xl font-bold"
        
            onChange={(e)=>setTitle(e.target.value)}
       
        placeholder="Title"
      />
      </div>
        <div className="h-64 overflow-y-scroll example overflow-x-visible z-10" >
          {/* <Textarea placeholder="Type your message here." /> */}
          <ReactQuill
          className=" dark:placeholder-white  mx-20 "
          value={details}
          onChange={setDetails}
        theme="bubble"
       
        placeholder="Tell us your story......"
      />
        </div>
        <div className="flex justify-between">
         <div className="flex px-7 py-5 bg-gray-200 dark:bg-secondary rounded-full font-medium gap-3"><GalleryHorizontal/> <div className="">Tags</div></div>
          <div onClick={()=>handleSubmit(title, details, session.user?.email, props.communityData.id)} className="px-7 py-5  bg-gray-200 dark:bg-secondary rounded-full font-medium gap-3 flex"><Plane/><div className="">Publish</div></div>
        </div>
      </div>
    </div>
  </div>):(<div className="">Not Logged in please login</div>)}

  </div>
  );
};

export default CreatePost;
