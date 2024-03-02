
import { Heart, MoreHorizontal, Pen, Share } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const baseURL = process.env.NEXTAUTH_URL;
const getPostsByCommunity = async (communityId:any) => {
    
 
    
    const res = await fetch(`${baseURL}/api/getPostsByCommunityId?communityId=${communityId}`, {
      cache: "no-store",
    });
    
    if (!res.ok) {
      throw new Error("Failed");
    }
  
    return res.json();
  };

const SinglePost = async (props:any) => {
  
 const postsByCommunity = await getPostsByCommunity(props.communityData.id)

 
  
 
  return (
    <div className="flex flex-col gap-12">
      {postsByCommunity?.map((item:any)=><Link href={`/post?postId=${item.id}`} key={item.id} className="">
        <div className="md:pl-20">
          <div className="p-12 flex flex-col gap-5 bg-secondary rounded-2xl shadow">
            <div className=" flex items-center gap-5 justify-between">
              <div className=" flex items-center gap-5">
                <div className="h-16 w-16 relative ">
                  <Image
                    className="rounded-full"
                    src={item.user.image}
                    alt=""
                    fill
                  />
                </div>
                <div className="">
                  <div className="font-semibold"> {item.user.name}</div>
                  <div className="text-sm">1{item.time.substring(1,10)}</div>
                </div>
              </div>

              <div className="text-5xl ">
                <MoreHorizontal size={48} />{" "}
              </div>
            </div>
            <div className="text-xl font-semibold">
            
           {item.title}
            </div>
            <div className=" " dangerouslySetInnerHTML={{ __html: item?.details.substring(0,1000) }}/>
            
            {/* 🚀 {item.details.toString()}  */}
            

            <div className="flex justify-between items-center mt-5">
              <div className="">
                <div className="flex gap-7">
                  <div className="flex gap-3">
                    <Heart />{item.likesNo} Likes
                  </div>
                  <div className="flex gap-3">
                    <Pen />{item.commentNos} Comments
                  </div>
                </div>
              </div>

              <div className="hidden md:flex gap-3 bg-slate-200 p-3 rounded-xl">
                <Share /> Share
              </div>
            </div>
          </div>
        </div>
      </Link>)}
{/* 
      <div className="">
        <div className="md:pl-20">
          <div className="p-12 flex flex-col gap-5 bg-secondary rounded-2xl shadow">
            <div className=" flex items-center gap-5 justify-between">
              <div className=" flex items-center gap-5">
                <div className="h-16 w-16 relative ">
                  <Image
                    className=""
                    src="/ayanokoji-modified.png"
                    alt=""
                    fill
                  />
                </div>
                <div className="">
                  <div className="font-semibold">Sahil Bomble</div>
                  <div className="text-sm">5 min Ago</div>
                </div>
              </div>

              <div className="text-5xl ">
                <MoreHorizontal size={48} />{" "}
              </div>
            </div>
            <div className="text-xl font-semibold">
              Volunteer Spotlight: Recognizing Outstanding Contributions to
              CampusConnect!
            </div>
            <div className=" font-medium">
              Hey, CampusConnect fam! 👋 It's time to shine the spotlight on our
              incredible volunteers who go above and beyond to make our
              community thrive. From event planning to mentorship, your
              dedication and passion make a world of difference. Join us in
              recognizing these outstanding individuals and thanking them for
              their invaluable contributions.
            </div>

            <div className="flex justify-between items-center mt-5">
              <div className="">
                <div className="flex gap-7">
                  <div className="flex gap-3">
                    <Heart />52 Likes
                  </div>
                  <div className="flex gap-3">
                    <Pen />3 Comments
                  </div>
                </div>
              </div>

              <div className="hidden md:flex gap-3 bg-slate-200 p-3 rounded-xl">
                <Share /> Share
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <div className="md:pl-20">
          <div className="p-12 flex flex-col gap-5 bg-secondary rounded-2xl shadow">
            <div className=" flex items-center gap-5 justify-between">
              <div className=" flex items-center gap-5">
                <div className="h-16 w-16 relative ">
                  <Image
                    className=""
                    src="/ayanokoji-modified.png"
                    alt=""
                    fill
                  />
                </div>
                <div className="">
                  <div className="font-semibold">Yash Chinchole</div>
                  <div className="text-sm">20 min Ago</div>
                </div>
              </div>

              <div className="text-5xl ">
                <MoreHorizontal size={48} />{" "}
              </div>
            </div>
            <div className="text-xl font-semibold">
              Let's Make a Difference: CampusConnect Community Service Day!
            </div>
            <div className=" font-medium">
              Hey, changemakers! 🌟 CampusConnect is gearing up for our annual
              Community Service Day, and we need your help to make a positive
              impact in our community. Whether it's cleaning up local parks,
              volunteering at a homeless shelter, or organizing a fundraiser,
              every act of kindness counts
            </div>

            <div className="flex justify-between items-center mt-5">
              <div className="">
                <div className="flex gap-7">
                  <div className="flex gap-3">
                    <Heart />52 Likes
                  </div>
                  <div className="flex gap-3">
                    <Pen />3 Comments
                  </div>
                </div>
              </div>

              <div className="hidden md:flex gap-3 bg-slate-200 p-3 rounded-xl">
                <Share /> Share
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <div className="md:pl-20">
          <div className="p-12 flex flex-col gap-5 bg-secondary rounded-2xl shadow">
            <div className=" flex items-center gap-5 justify-between">
              <div className=" flex items-center gap-5">
                <div className="h-16 w-16 relative ">
                  <Image
                    className=""
                    src="/ayanokoji-modified.png"
                    alt=""
                    fill
                  />
                </div>
                <div className="">
                  <div className="font-semibold">Sushant Bansode</div>
                  <div className="text-sm">2 min Ago</div>
                </div>
              </div>

              <div className="text-5xl ">
                <MoreHorizontal size={48} />{" "}
              </div>
            </div>
            <div className="text-xl font-semibold">
              Wellness Wednesday: Join CampusConnect for a Day of Self-Care!
            </div>
            <div className=" font-medium">
              Hey, wellness warriors! 🧘‍♀ Ready to recharge and rejuvenate?
              Join CampusConnect for Wellness Wednesday, a day dedicated to
              self-care and holistic well-being. From yoga sessions to
              mindfulness workshops, we've got activities to nourish your body,
              mind, and soul.
            </div>

            <div className="flex justify-between items-center mt-5">
              <div className="">
                <div className="flex gap-7">
                  <div className="flex gap-3">
                    <Heart />52 Likes
                  </div>
                  <div className="flex gap-3">
                    <Pen />3 Comments
                  </div>
                </div>
              </div>

              <div className="hidden md:flex gap-3 bg-slate-200 p-3 rounded-xl">
                <Share /> Share
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <div className="md:pl-20">
          <div className="p-12 flex flex-col gap-5 bg-secondary rounded-2xl shadow">
            <div className=" flex items-center gap-5 justify-between">
              <div className=" flex items-center gap-5">
                <div className="h-16 w-16 relative ">
                  <Image
                    className=""
                    src="/ayanokoji-modified.png"
                    alt=""
                    fill
                  />
                </div>
                <div className="">
                  <div className="font-semibold">Vijay Chaure</div>
                  <div className="text-sm">2 hour Ago</div>
                </div>
              </div>

              <div className="text-5xl ">
                <MoreHorizontal size={48} />{" "}
              </div>
            </div>
            <div className="text-xl font-semibold">
              Diversity Dialogue: CampusConnect Presents an Open Discussion on
              Inclusion
            </div>
            <div className=" font-medium">
              Hey, advocates for equality and inclusion! 🌈 CampusConnect
              invites you to join us for an open and honest dialogue on
              diversity and inclusion. Let's come together to share our stories,
              perspectives, and ideas for creating a more inclusive campus
              community.
            </div>

            <div className="flex justify-between items-center mt-5">
              <div className="">
                <div className="flex gap-7">
                  <div className="flex gap-3">
                    <Heart />52 Likes
                  </div>
                  <div className="flex gap-3">
                    <Pen />3 Comments
                  </div>
                </div>
              </div>

              <div className="hidden md:flex gap-3 bg-slate-200 p-3 rounded-xl">
                <Share /> Share
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default SinglePost;
