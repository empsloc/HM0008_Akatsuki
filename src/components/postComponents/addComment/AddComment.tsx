"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";



import { Label } from "@/components/ui/label";
import { Plus } from "lucide-react";
import { useSession } from "next-auth/react";
import { useState } from "react";








const AddComment=(props:any)=>{



  const {  data: session, status } = useSession();
    
  const [details, setDetails] = useState("previous");

  const handleSubmit  = async (postId:any, userEmail:any, details:any) => {
  
   await fetch("/api/postComment", {
     method: "POST",
     body: JSON.stringify({ postId:postId, userEmail:userEmail, details: details}),
   });
   location.reload();
   
  
 };
      
    return(
        <div className="">


{status==="authenticated"?(<div className="mt-7 flex flex-col gap-7">
   
   <Dialog>
     <DialogTrigger asChild>
       <div>
         {" "}
         <div className="flex items-center gap-3 p-3 border rounded-full w-max">
     <Plus />
     {/* {data[0]?.id} */}
     Add a comment 
   </div>
       </div>
     </DialogTrigger>
     <DialogContent className="sm:max-w-[425px]">
       <DialogHeader>
         <DialogTitle>Give a comment</DialogTitle>
         <DialogDescription>
           Please refrain from using strong language
         </DialogDescription>
       </DialogHeader>
       <div className="grid gap-4 py-4">
         <div className="grid grid-cols-1 items-center gap-4 flex-col">
           <Label   htmlFor="name" className="text-right">
             <div className="flex justify-start">Comment</div>
           </Label>
           <textarea
             id="name"
             defaultValue=""
             placeholder="Enter your comment"
             className="col-span-3  border-none outline-none"
             onChange={(e)=>setDetails(e.target.value)}
             
             
           />
         </div>
         
       </div>
       <DialogFooter>
         <Button type="button" onClick={()=>handleSubmit(props.postData.id, session.user?.email, details)}>Comment</Button>
       </DialogFooter>
     </DialogContent>
   </Dialog>
   
   {/* <Comments postData={props.postData} /> */}
   
 </div>):(<div className="">Please login in order to comment</div>) }
        </div>
    )
}

export default AddComment