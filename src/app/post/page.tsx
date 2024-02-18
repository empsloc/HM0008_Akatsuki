import MaxWidthWrapper from "@/components/helperComponents/MaxWidthWrapper/MaxWidthWrapper";
import PostContainer from "@/components/postComponents/PostContainer";
import Comments from "@/components/postComponents/comments/Comments";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Plus } from "lucide-react";
const PostPage = () => {
  return (
    <MaxWidthWrapper>
      <div className="flex flex-col gap-5">
        <div className="">
          <div className="">
            <PostContainer />
          </div>
        </div>

        <div className="mt-7 flex flex-col gap-7">
          <Dialog>
            <DialogTrigger asChild>
              <div>
                {" "}
                <div className="flex items-center gap-3 p-3 border rounded-full w-max">
            <Plus />
            Add a comment
          </div>
              </div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Give a comment</DialogTitle>
                <DialogDescription>
                  Please refrain from using strong language
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-1 items-center gap-4 flex-col">
                  <Label   htmlFor="name" className="text-right">
                    <div className="flex justify-start">Comment</div>
                  </Label>
                  <Textarea
                    id="name"
                    defaultValue=""
                    className="col-span-3"
                  />
                </div>
                
              </div>
              <DialogFooter>
                <Button type="submit">Comment</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          
          <Comments />
          
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default PostPage;
