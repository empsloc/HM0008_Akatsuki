import { Textarea } from "@/components/ui/textarea";
import { GalleryHorizontal, Plane } from "lucide-react";
const CreatePost = () => {
  return (
    <div className="">
      <div className="md:pl-20">
        <div className="p-5 flex flex-col gap-5 bg-secondary rounded-2xl shadow-md">
          <div className="font-semibold">Create Post</div>
          <div className="">
            <Textarea placeholder="Type your message here." />
          </div>
          <div className="flex justify-between">
           <div className="flex px-7 py-5 bg-gray-200 dark:bg-secondary rounded-full font-medium gap-3"><GalleryHorizontal/> <div className="">Tags</div></div>
            <div className="px-7 py-5  bg-gray-200 dark:bg-secondary rounded-full font-medium gap-3 flex"><Plane/><div className="">Publish</div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
