import Image from "next/image"

const ClubHeadingContainer=()=>{
    return(
        <div className="">
            <div className="grid grid-cols-2">
                <div className="flex justify-center items-center"><div className="text-5xl font-bold">Team CESA</div></div>
                <div className="md:pl-16"><div className="w-full h-96 relative"><Image src="/com2.png" alt="" fill/></div></div>
            </div>
        </div>
    )


}

export default ClubHeadingContainer