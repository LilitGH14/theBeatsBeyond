"use client";
import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css/bundle";
import TextScrollBg from "../../../public/assets/img/bg/text-scroll-bg.png";

type RunningLinesProps = {
  dict: { [key: string]: string } | null;
  ordering: number;
};
const RunningLines = ({ dict, ordering }: RunningLinesProps) => {
  return (
    <section
      className="bb-rt-area"
      style={{ backgroundImage: `url(${TextScrollBg.src})` }}
    >
      <div className="bb-rt__scroll-wrapper">
        <div className="bb-rt-text-line-1">
          <div className="bb-rt-text-st-active">
            <div className="bb-rt-text-st-active-wrapper">
              <Swiper
                modules={[Autoplay]}
                loop={true}
                spaceBetween={0}
                slidesPerView="auto"
                autoplay={{
                  delay: 100,
                  disableOnInteraction: true,
                }}
                simulateTouch={false}
                speed={6000}
              >
                {[1, 2, 3, 4].map((idx) => (
                  <SwiperSlide key={idx}>
                    <h3
                      className={idx % 2 == 0 ? "text-color-1" : "text-color-2"}
                    >
                      {dict?.Running_line?.[ordering][0]}
                    </h3>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
        <div className="bb-rt-text-line-2">
          <div className="bb-rt-text-st-active">
            <div className="bb-rt-text-st-active-wrapper">
              <Swiper
                modules={[Autoplay]}
                loop={true}
                spaceBetween={0}
                slidesPerView="auto"
                simulateTouch={false}
                autoplay={{
                  delay: 100,
                  disableOnInteraction: true,
                  reverseDirection: true,
                }}
                speed={6000}
              >
                {[1, 2, 3, 4].map((idx) => (
                  <SwiperSlide key={idx}>
                    <h3 className={idx % 2 == 0 ? "text-color-2" : ""}>
                      {dict?.Running_line?.[ordering][1]}
                    </h3>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RunningLines;
