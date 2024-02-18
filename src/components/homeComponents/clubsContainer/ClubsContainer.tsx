import { ArrowRight, Club } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
const getData = async () => {
  const res = await fetch("http://localhost:3000/api/clubs", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("failed");
  }

  return res.json();
};
const ClubsContainer = async () => {
  const data = await getData();

  return (
    <div className="">
      <div className="text-2xl font-bold my-10">Clubs Provided By College</div>
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-16">
        {data?.map((item: any) => (
          <Link href ="/club?club=cesa" className="" key={item._id}>
            <div className="">
              <div className="flex flex-col justify-center shadow-md rounded-xl dark:bg-slate-900 dark:shadow-black">
                <div className="relaive h-48 md:h-64 w-full  relative">
                  <Image
                    className="rounded-xl shadow-lg"
                    src={`${item.img}`}
                    alt=""
                    fill
                  />
                </div>
                <div className="p-7 md:p-10 flex flex-col gap-5">
                  <div className="">{item.slug}</div>
                  <div className="font-semibold text-2xl">
                    {item.title}
                  </div>
                  <div className="flex justify-between">
                    <div className="font-medium flex gap-3">
                      <div className="">
                        <Club />
                      </div>
                      <div className="">Register</div>
                    </div>
                    <div className="flex gap-3">
                      <div className="">See More</div>
                      <div className="">
                        <ArrowRight />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ClubsContainer;
