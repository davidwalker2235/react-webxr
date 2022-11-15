import React, { useState } from "react";
import Button from "../common/Button/Button";
import Intro2D from "./Intro2D";

const Game2D = () => {
  const [startButtonReady, setStartButtonReady] = useState(false);
  // 2 - <Intro2d> shows the words animation and trigger the boolean variable when the animation has been finished
  return (
    <div className="start-btn">
      <Intro2D onReady={() => setStartButtonReady(true)} />
      {startButtonReady && (
        <Button animate onClick={() => null}>
          START
        </Button>
      )}
      <style jsx>{`
        .start-btn {
          display: block;
          margin-top: 64px;
        }
      `}</style>
    </div>
  );
};

export default Game2D;
