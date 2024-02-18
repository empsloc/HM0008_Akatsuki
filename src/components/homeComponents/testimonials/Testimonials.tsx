import Image from "next/image";

const Testimonials = () => {
  return (
    <div className="">
      <div className="text-zinc-500">Connections</div>
      <div className="grid grid-cols-2 justify-center items-center">
        <div className="col-span-1 text-xl md:text-2xl  font-semibold">
          Connect with Alumni and explore networks
        </div>
        <div className="col-span-1 flex justify-end">
          <div className="w-max px-7 py-4 hover:text-white border-blue-900 border hover:border-none hover:bg-purple-950 hover:shadow-purple-950 rounded-full">
            Start Connecting
          </div>
          
        </div>
      </div>

      <div className="grid grid-cols-2 gap-16 mt-20">
        <div className="col-span-2 p-7 rounded-md md:col-span-1 dark:shadow-black shadow-lg">
          <div className="flex flex-col gap-3">
            <div className=" my-5 -mt-10">
              <div className="relative h-20 w-20 shadow-xl" >
                <Image className="rounded-md" src="/student1.png" alt="" fill />
              </div>
            </div>
            <div className="font-medium">
              “Engineering @BrowserStack | ACM ICPC Regionalist 2020 | MLSA 2021 | Google DSC Lead 2020 making complex concepts easy to grasp. I feel confident and well-prepared for real-world challenges.”
            </div>
            <div className="font-bold">
            Suyash Sonawane

            </div>
          </div>
        </div>
        <div className="col-span-2 p-7 rounded-md md:col-span-1 dark:shadow-black shadow-lg">
          <div className=" flex flex-col gap-3">
            <div className=" my-5 -mt-10">
              <div className="relative h-20 w-20 shadow-xl" >
                <Image className="rounded-md" src="/student2.png" alt="" fill />
              </div>
            </div>
            <div className="font-medium">
              “I am a quick learner which makes the learning part fun and want to learn as much as possible. I am creative. I try to look at things from a different perspective”
            </div>

            <div className="font-bold">
            Harish Dalal

            </div>
          </div>
        </div>
        <div className="col-span-2 p-7 rounded-md md:col-span-1 dark:shadow-black shadow-lg">
          <div className="flex flex-col gap-3">
            <div className=" my-5 -mt-10">
              <div className="relative h-20 w-20 shadow-xl" >
                <Image className="rounded-md" src="/student3.png" alt="" fill />
              </div>
            </div>
            <div className="font-medium">
              “I am a Full Stack Software Developer and Machine Learning Enthusiast with 3.5+ years of experience in software development, system design, database management, machine learning, and backend RESTful services.”
            </div>
            <div className="font-bold">
            Sahil Hemnani

            </div>
          </div>
        </div>
        <div className="col-span-2 p-7 rounded-md md:col-span-1 dark:shadow-black shadow-lg">
          <div className="flex flex-col gap-3">
            <div className=" my-5 -mt-10">
              <div className="relative h-20 w-20 shadow-xl" >
                <Image className="rounded-md" src="/student4.png" alt="" fill />
              </div>
            </div>
            <div className="font-medium">
              “I'm truly impressed by the quality of instruction. These courses have broadened my skill set and opened new opportunities.”
            </div>
            <div className="font-bold">
              Himanshu Kadu
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
