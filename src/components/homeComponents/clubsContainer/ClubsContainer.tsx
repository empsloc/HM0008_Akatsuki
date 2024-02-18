import { ArrowRight, Club } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ClubsContainer =  () => {


  return (
    <div className="">
      <div className="text-2xl font-bold my-10">Clubs Provided By College</div>
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-16">
       
          <Link href ="/club?club=cesa" className="" >
            <div className="">
              <div className="flex flex-col justify-center shadow-md rounded-xl dark:bg-slate-900 dark:shadow-black">
                <div className="relaive h-48 md:h-64 w-full  relative">
                  <Image
                    className="rounded-xl shadow-lg"
                    src="/aimsa.png"
                    alt=""
                    fill
                  />
                </div>
                <div className="p-7 md:p-10 flex flex-col gap-5">
                  <div className="">AIMSA</div>
                  <div className="font-semibold text-2xl">
                  Artificial Intelligence and Machine Learning Students Association                  </div>
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


          <Link href ="/club?club=cesa" className="" >
            <div className="">
              <div className="flex flex-col justify-center shadow-md rounded-xl dark:bg-slate-900 dark:shadow-black">
                <div className="relaive h-48 md:h-64 w-full  relative">
                  <Image
                    className="rounded-xl shadow-lg"
                    src="/cesa.png"
                    alt=""
                    fill
                  />
                </div>
                <div className="p-7 md:p-10 flex flex-col gap-5">
                  <div className="">CESA</div>
                  <div className="font-semibold text-2xl">
                  Computer Engineering Student's Association
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


          <Link href ="/club?club=cesa" className="" >
            <div className="">
              <div className="flex flex-col justify-center shadow-md rounded-xl dark:bg-slate-900 dark:shadow-black">
                <div className="relaive h-48 md:h-64 w-full  relative">
                  <Image
                    className="rounded-xl shadow-lg"
                    src="/itsa.png"
                    alt=""
                    fill
                  />
                </div>
                <div className="p-7 md:p-10 flex flex-col gap-5">
                  <div className="">ITSA</div>
                  <div className="font-semibold text-2xl">
                  Information Technology Students Association
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


          <Link href ="/club?club=cesa" className="" >
            <div className="">
              <div className="flex flex-col justify-center shadow-md rounded-xl dark:bg-slate-900 dark:shadow-black">
                <div className="relaive h-48 md:h-64 w-full  relative">
                  <Image
                    className="rounded-xl shadow-lg"
                    src="/mesa.png"
                    alt=""
                    fill
                  />
                </div>
                <div className="p-7 md:p-10 flex flex-col gap-5">
                  <div className="">MESA</div>
                  <div className="font-semibold text-2xl">
                  Mechanical Engineering Students Association
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


          <Link href ="/club?club=cesa" className="" >
            <div className="">
              <div className="flex flex-col justify-center shadow-md rounded-xl dark:bg-slate-900 dark:shadow-black">
                <div className="relaive h-48 md:h-64 w-full  relative">
                  <Image
                    className="rounded-xl shadow-lg"
                    src="/civil.png"
                    alt=""
                    fill
                  />
                </div>
                <div className="p-7 md:p-10 flex flex-col gap-5">
                  <div className="">CESA CIVIL</div>
                  <div className="font-semibold text-2xl">
                  Civile Enginneering Students Association
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
      
      </div>
    </div>
  );
};

export default ClubsContainer;
