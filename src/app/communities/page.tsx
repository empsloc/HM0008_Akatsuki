
import CreatePost from "@/components/communityComponents/createPost/CreatePost"
import SideMenu from "@/components/communityComponents/sideMenu/SideMenu"
import SinglePost from "@/components/communityComponents/singlePost/SinglePost"


import MaxWidthWrapper from "@/components/helperComponents/MaxWidthWrapper/MaxWidthWrapper"
import Link from "next/link"
const baseURL = process.env.NEXTAUTH_URL;
const getData = async (communityId:any) => {
    
 
    
    const res = await fetch(`${baseURL}/api/getCommunityById?communityId=${communityId}`, {
      cache: "no-store",
    });
    
    if (!res.ok) {
      throw new Error("Failed");
    }
  
    return res.json();
  };
const CommunityPage= async (props:any)=>{
const communityData = await getData(props.searchParams.communityId)
//      const searchParams = useSearchParams()
//   const community_id = searchParams.get('community_id')
   
    return(
        <MaxWidthWrapper>
            <div className="">
                <div className="grid grid-cols-7">
                    <div className="hidden md:block md:col-span-2"><SideMenu communityData = {communityData[0]}/></div>
                    <div className="md:col-span-5 col-span-7 flex flex-col gap-12">
                        
                        <div className="">
                            <CreatePost communityData={communityData[0]}/>
                        </div>

                        <div className="mt-12">
                           <Link href="/post"> <SinglePost  communityData={communityData[0]} /></Link>
                        </div>
                        
                        
                    </div>
                </div>
            </div>
        </MaxWidthWrapper>
    )
}

export default CommunityPage