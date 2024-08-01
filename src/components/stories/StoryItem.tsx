import { imageLoader } from "../../hooks/ImageLoader";
import Link from "next/link";
import Image from "next/image";
import blogBgImage from "../../../public/assets/img/blog/story.jpg";

type StoryItemProps = {
  dict: { [key: string]: string };
  id: number;
  date: string;
  username: string;
  title: string;
};
const StoryItem = ({ dict, id, date, username, title }: StoryItemProps) => {
  const openDetails = () => {
    localStorage.setItem("story_id", id.toString());
  };

  return (
    <Link href={`/story-details`}>
      <div className="bb-story__item" role="button" onClick={openDetails}>
        <div className="bb-story__img ms-overlay10 fix ms-br-15 p-relative zindex-10">
          <Image
            src={blogBgImage}
            loader={imageLoader}
            placeholder="blur"
            loading="lazy"
            alt={dict?.Story_img_alt}
          />
          <span className="bb-story__date">{date}</span>
          <div className="bb-story__content">
            <div className="bb-story__username">{username}</div>
            <h3 className="bb-story__title ms-title-border">{title}</h3>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default StoryItem;
