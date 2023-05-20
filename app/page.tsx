import Photo from "@/components/Photo";
import FollowBar from "@/components/FollowBar";
import ContactBar from "@/components/ContactBar";
import Subtitle from "@/components/Subtitle";

const Blog = () => {
  return (
    <div className="flex flex-col justify-center w-full h-screen bg-black relative">
      <div className="flex items-center justify-center w-1/2 grow px-11">
        <Photo />
      </div>
      <FollowBar />
      <div className="self-end px-11 pb-9 my-2 w-full gap-[40px] flex">
        <ContactBar />
        <Subtitle />
      </div>
    </div>
  );
};

export default Blog;
