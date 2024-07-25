import { SongType } from "@/types/types";
import React from "react";

type SidebarType = {
  dict: { [key: string]: string } | null;
  song: SongType;
};
const Sidebar = ({ dict, song }: SidebarType) => {
  return (
    <div className="col-sm-4 col-xl-5">
      <div className="bb-genres-right-wrap mb-40">
        <div className="bb-genres-info-wrap d-inline-block p-relative mb-50 ms-br-15 fix">
          <div className="bb-genres-info">
            <div className="bb-overlay ms-overlay7 zindex--1 p-absolute"></div>
            <h5 className="bb-genres-info-title ms-title3 white-text">
              {dict?.Performance_info}
            </h5>
            <div className="bb-genres-info-list-wrap">
              <div className="bb-genres-info-list">
                <h6>{song?.songName}</h6>
                <p>{song?.category}</p>
              </div>
              <div className="bb-genres-info-list d-flex">
                <p>{song?.description}</p>
              </div>
              <div className="bb-genres-info-list">
                <h6>{dict?.Event_duration}</h6>
                <p>
                  {song?.duration} {dict?.Minute_sets}
                </p>
              </div>
              <div className="bb-genres-info-list">
                <div className="bb-social2-wrap">
                  <span className="bb-social-text mr-20">
                    <i className="flaticon-share"></i> {dict?.Share}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
