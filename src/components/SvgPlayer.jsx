import React, { useEffect, useRef } from "react";

// import mySvg from "../assets/svgs/SnookerStick.svga";
// import poolSvg from "../assets/svgs/PoolGame.svga";
import "../styles/svgs.scss";

import SVGA from "svgaplayerweb";
const SvgPlayer = ({ src, snookerTable, stick, crane, foosball, start }) => {
  const demoCanvasRef = useRef(null);

  useEffect(() => {
    const player = new SVGA.Player(demoCanvasRef.current);
    const parser = new SVGA.Parser(demoCanvasRef.current);

    // const player = new SVGA.Player("bbq-svga");
    // const parser = new SVGA.Parser("bbq-svga");

    parser.load(src, (videoItem) => {
      player.setVideoItem(videoItem);
      // player.setContentMode("AspectFit");
      if (start) {
        player.startAnimation();
      } else {
        player.stopAnimation();
      }
    });
    return () => {
      demoCanvasRef.current = null;
      player.clear();
    };
  }, [start]);

  return (
    <div
      ref={demoCanvasRef}
      className={
        (snookerTable && "snooker-table") ||
        (stick && "snooker-stick") ||
        (crane && "crane") ||
        (foosball && "foosball-svg")
      }
      // id="bbq-svga"
    />
  );
};

export default SvgPlayer;
