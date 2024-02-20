import Image from "next/image";

const baseURL = process.env.NEXTAUTH_URL||"http://localhost:3000"
const getData = async () => {
    const res = await fetch(`${baseURL}/api/clubs`, {
      method: "GET",
      
    });

    if (!res.ok) {
        throw new Error("Failed");
      }
      return res.json();
  };
const HeadingContainer = async ()=>{

    const data = await getData()
    console.log(data)
    return(
        <div className="">
            <div className="grid grid-cols-2">
                <div className="col-span-2 md:col-span-1 flex justify-center gap-10 flex-col">
                    <div className="text-2xl md:text-3xl font-bold">Explore vast array of topics and fields</div>
                    <div className="font">{data[0].slug} Welcome to CommunityConnect, the hub for streamlined college community management, effortless volunteer recruitment, and meaningful connections. Say goodbye to chaos with our intuitive tools that simplify event organization and club management.</div>

                     </div>
                <div className="col-span-1 hidden md:flex px-7">
                    <div className="w-full h-96 relative">
                        <Image src="/com.png" alt="" fill/>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeadingContainer