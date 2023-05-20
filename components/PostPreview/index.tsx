import type { NextPage } from "next";
import Link from "next/link";

interface IProps {
  slug: string;
  title: string;
}

const PostPreview: NextPage<IProps> = ({ title, slug }: IProps) => {
  return (
    <li className="w-fit">
      <Link href={`/${slug}`}>
        <a>{title}</a>
      </Link>
    </li>
  );
};

export default PostPreview;
