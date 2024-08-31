import { StoryDetailsType } from "@/types/types";
import React from "react";

type StoryDetailsSidebarProps = {
  story: StoryDetailsType;
  dict: { [key: string]: string };
};
const StoryDetailsSidebar = ({ story, dict }: StoryDetailsSidebarProps) => {
  return (
    <div className="bb-story__details-sidebar">
      <h3 className="bb-story__details-sidebar-title">{dict.Story_details}</h3>
      <div className="bb-story__details-sidebar-item">
        <div className="bb-story__details-sidebar-inner">
          <h4 className="bb-story__details-title">{dict.Author}</h4>
          <span className="bb-story__details-stext">{story?.username}</span>
        </div>
        <div className="bb-story__details-inner">
          <h4 className="bb-story__details-title">{dict.Date}</h4>
          <span className="bb-story__details-stext">{story?.date}</span>
        </div>
        <div className="bb-story__details-inner">
          <h4 className="bb-story__details-title">{dict.Category}</h4>
          <span className="bb-story__details-stext">
            {story?.tags?.map((m: string) => m)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default StoryDetailsSidebar;
