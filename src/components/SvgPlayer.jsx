import React, { useEffect, useRef } from "react";

import mySvg from "../assets/svgs/SnookerStick.svga";
import poolSvg from "../assets/svgs/PoolGame.svga";
import "../styles/svgs.scss";

import SVGA from "svgaplayerweb";
const SvgPlayer = ({ src, snookerTable, stick, crane, foosball }) => {
  const demoCanvasRef = useRef(null);

  useEffect(() => {
    const player = new SVGA.Player(demoCanvasRef.current);
    const parser = new SVGA.Parser(demoCanvasRef.current);

    parser.load(src, (videoItem) => {
      player.setVideoItem(videoItem);
      player.setContentMode("AspectFit");
      player.startAnimation();
    });
    return () => {
      demoCanvasRef.current = null;
    };
  }, []);

  return (
    <div
      ref={demoCanvasRef}
      className={
        (snookerTable && "snooker-table") ||
        (stick && "snooker-stick") ||
        (crane && "crane") ||
        (foosball && "foosball-svg")
      }
    ></div>
  );
};

export default SvgPlayer;
