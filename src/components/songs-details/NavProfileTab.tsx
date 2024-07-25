"use client";
import React, { useState } from "react";
import AudioPlayer from "react-h5-audio-player";
import song_playlist from "../../data/song-playlist-data";
import "react-h5-audio-player/lib/styles.css";

const NavProfileTab = () => {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const currentSong = song_playlist[currentSongIndex];

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  return (
    <div className="bb-genres-tab2-text ms-genres-tab2-padding ms-bg-2 ms-br-15">
      <h4 className="bb-title3 white-text text-center mb-25">
        RM – Wild Flower
      </h4>
      <div className="bb-border2 mb-30">
        <h4 className="bb-title3 white-text text-center mb-30">Demo Tracks</h4>
      </div>
      <div className="bb-genres-audio ms-wrapper-audio-player">
        <div className="bb-header2-song">
          <div id="jquery_jplayer_1" className="jp-jplayer"></div>
          <div
            id="jp_container_1"
            className="jp-audio"
            role="application"
            aria-label="media player"
          >
            <AudioPlayer
              className="audio_player"
              src={currentSong ? currentSong.mp3 : ""}
              autoPlayAfterSrcChange={true}
              onPlaying={handlePlay}
              onPause={handlePause}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavProfileTab;
