import React, { useEffect, useRef } from "react";
import SVGA from "svgaplayerweb";

const TravelSvga = ({ src, snookerTable, stick, crane, foosball, start }) => {
  const playerRef = useRef(null);
  var player, parser;
  useEffect(() => {
    player = new SVGA.Player("#travelSvga");
    parser = new SVGA.Parser("#travelSvga");
    parser.load(src, function (videoItem) {
      player.setVideoItem(videoItem);
    });
    playerRef.current = player;
    return () => {
      player.clear();
    };
  }, []);
  const handleStartClick = () => {
    playerRef.current.startAnimation();
  };
  const handleStopClick = () => {
    console.log("stop animation calledd");
    playerRef.current.stopAnimation();
    initializeSVGAPlayer();
  };
  useEffect(() => {
    if (start) {
      handleStartClick();
    } else {
      handleStopClick();
    }
  }, [start]);

  const initializeSVGAPlayer = () => {
    player = new SVGA.Player("#travelSvga");
    parser = new SVGA.Parser("#travelSvga");
    parser.load(src, function (videoItem) {
      player.setVideoItem(videoItem);
    });
    playerRef.current = player;
  };

  return (
    <>
      <div
        className={
          (snookerTable && "snooker-table") ||
          (stick && "snooker-stick") ||
          (crane && "crane") ||
          (foosball && "foosball-svg")
        }
        id="travelSvga"
      ></div>
    </>
  );
};

export default TravelSvga;
