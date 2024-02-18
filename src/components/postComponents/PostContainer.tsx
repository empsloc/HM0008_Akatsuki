import { Heart, Pen, Share } from "lucide-react";
import Image from "next/image";

const PostContainer = () => {
  return (
    <div className="">
      <div className="">
        <div className="p-12 flex flex-col gap-5 bg-secondary rounded-2xl shadow">
          <div className="text-xl font-semibold">
            Web3 Workshop: Exploring the Future of Decentralization
          </div>
          <div className=" font-medium">
            🚀 Hey, fellow blockchain enthusiasts and decentralization
            advocates! 💡 CryptoConnect21 is excited to invite you to our
            upcoming workshop on Web3 and the future of decentralized
            technologies. Join us for an immersive session where we'll delve
            into the fundamentals of blockchain, decentralized finance (DeFi),
            NFTs, and more. Let's discuss the potential of Web3 to revolutionize
            industries, empower individuals, and reshape the digital landscape.
            <div className="text-xl font-semibold my-3">Understanding Web3</div>
            Decentralization Demystified: Explore the core principles of Web3
            and how it differs from traditional web architectures. Understand
            the importance of decentralization in fostering transparency,
            security, and censorship resistance. Blockchain Basics: Dive into
            the fundamentals of blockchain technology and its role as the
            backbone of Web3. Learn about distributed ledgers, consensus
            mechanisms, and the power of immutable data.
          </div>

          <div className=" flex items-center gap-5 justify-between">
            <div className=" flex items-center gap-5">
              <div className="h-16 w-16 relative ">
                <Image className="" src="/ayanokoji-modified.png" alt="" fill />
              </div>
              <div className="">
                <div className="font-semibold">Atharva Bokade</div>
                <div className="text-sm">10 min Ago</div>
              </div>
            </div>

            <div className="text-5xl "></div>
          </div>

          <div className="flex justify-between items-center mt-5">
            <div className="">
              <div className="flex gap-7">
                <div className="flex gap-3">
                  <Heart />52 Likes
                </div>
                <div className="flex gap-3">
                  <Pen />10 Comments
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
  );
};

export default PostContainer;
