import React, { useRef } from "react";
import { Player } from "video-react";

import useWindowDimensions from "../../hooks/useWindowDimensions";

import "./video-react.css";

const Video = ({ src }) => {
  const player = useRef(null);
  const { height, width } = useWindowDimensions();

  return (
    <Player
      preload="auto"
      playsInline
      ref={player}
      fluid={false}
      width={width}
      height={height}
    >
      <source src={src} />
    </Player>
  );
};

export default Video;
