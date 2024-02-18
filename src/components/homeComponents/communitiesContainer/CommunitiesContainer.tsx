import { ArrowRight, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/communities", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("failed");
  }

  return res.json();
};
const CommunitiesContainer = async () => {

  const data = await getData();
  console.log(data)
  return (
    <div className="">
      <div className="text-2xl font-bold my-10">Browse Communities</div>

      <div className=" grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1   gap-5">
        {data?.map((item:any)=>(<div key={item._id} className="">
          <Link href={`/communities?community=${item.comSlug}`} className="">
            <div className="bg--400  p-5 rounded  bg-secondary">
              <div className="flex md:justify-center justify-between">
                <div className="flex gap-3 items-center">
                  <div className="">
                    <div className="h-10 w-10 relative">
                      <Image src="/ayanokoji-modified.png" alt="" fill />
                    </div>
                  </div>
                  <div className="md:text-lg lg:text-lg font-medium">{item.comName}</div>
                </div>
                <div className="md:hidden">
                  <ArrowRight />
                </div>
              </div>
            </div>
          </Link>
        </div>))}
        
        <div className="">
          <div className="">
            <div className="bg--400  py-5 px-5 rounded bg-secondary">
              <div className="flex md:justify-center justify-center">
                <div className="flex gap-3 items-center">
                  <div className="">
                    <div className="h-10 w-10 relative">
                      {/* <Image src="/ayanokoji-modified.png" alt="" fill /> */}
                    </div>
                  </div>
                  <div className="md:text-lg lg:text-lg font-medium flex gap-5 justify-center items-center">
                    <div className="flex gap-2">
                      <div className="">Create</div>{" "}
                      <div className="md:hidden">Community</div>
                    </div>
                    <div className="">
                      <Plus />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunitiesContainer;
