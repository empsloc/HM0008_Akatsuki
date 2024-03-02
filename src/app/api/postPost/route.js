import prisma from "@/utils/connect";
import { NextResponse } from "next/server";
export const POST = async (req) => {
    // const session = await getAuthSession();
  
   
  
    try {
      const body = await req.json();
      const post = await prisma.post.create({
        data: { ...body },
      });

    
  
      return new NextResponse(JSON.stringify(body, { status: 200 }));
    } catch (err) {
      console.log(err);
      return new NextResponse(
        JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
      );
    }
  };

// import prisma from "@/utils/connect"
// import { NextResponse } from "next/server"
// export const GET = async ()=>{

//     try{

//         const communities = await prisma.community.findMany()

//         return new NextResponse(JSON.stringify(
//             communities
//         ))

//     }catch(err){
//         console.log(err)

//         return new NextResponse(JSON.stringify({
//             message:"something went wrong"
//         }))
//     }
// }