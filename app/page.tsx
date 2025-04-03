import FollowBar from "@/components/FollowBar";
import ContactBar from "@/components/ContactBar";
import Subtitle from "@/components/Subtitle";
import MiniBio from "@/components/MiniBio";

const Blog = () => {
  return (
    <div className="flex h-full flex-col flex-wrap bg-black relative justify-center">
      <div className="flex flex-auto flex-col sm:flex-row w-full justify-center">
        <MiniBio />
      </div>
      <FollowBar />
      <div className="relative w-full hidden md:flex">
        <ContactBar />
        <Subtitle />
      </div>
    </div>
  );
};

export default Blog;
