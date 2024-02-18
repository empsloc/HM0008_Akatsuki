
import CreatePost from "@/components/communityComponents/createPost/CreatePost"
import SideMenu from "@/components/communityComponents/sideMenu/SideMenu"
import SinglePost from "@/components/communityComponents/singlePost/SinglePost"
import MaxWidthWrapper from "@/components/helperComponents/MaxWidthWrapper/MaxWidthWrapper"
import Link from "next/link"

const CommunityPage=()=>{
   
    return(
        <MaxWidthWrapper>
            <div className="">
                <div className="grid grid-cols-7">
                    <div className="hidden md:block md:col-span-2"><SideMenu/></div>
                    <div className="md:col-span-5 col-span-7 flex flex-col gap-12">
                        
                        <div className="">
                            <CreatePost/>
                        </div>

                        <div className="mt-12">
                           <Link href="/post"> <SinglePost/></Link>
                        </div>
                        
                        
                    </div>
                </div>
            </div>
        </MaxWidthWrapper>
    )
}

export default CommunityPage