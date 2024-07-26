"use client";
import React, { useState } from "react";
import AudioPlayer from "react-h5-audio-player";
import song_playlist from "../../../public/assets/mock/song-playlist-data";
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
    <div className="bb-songs__audio">
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
  );
};

export default NavProfileTab;
