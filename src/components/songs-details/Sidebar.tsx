import { SongType } from "@/types/types";
import React from "react";

type SidebarType = {
  dict: { [key: string]: string } | null;
  song: SongType;
};
const Sidebar = ({ dict, song }: SidebarType) => {
  return (
    <div className="col-lg-4">
      <div className="bb-songs__info">
        <h5 className="bb-songs__info-title">{dict?.Performance_info}</h5>
        <div className="bb-songs__info-list-container">
          <div className="bb-songs__info-list">
            <h6>{song?.songName}</h6>
            <p>{song?.category}</p>
          </div>
          <div className="bb-songs__info-list d-flex">
            <p>{song?.description}</p>
          </div>
          <div className="bb-songs__info-list">
            <h6>{dict?.Event_duration}</h6>
            <p>
              {song?.duration} {dict?.Minute_sets}
            </p>
          </div>
          <div className="bb-songs__info-list">
            <span className="bb-social">
              <i className="flaticon-share"></i> {dict?.Share}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
