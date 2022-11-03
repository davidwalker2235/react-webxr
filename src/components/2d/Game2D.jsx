import React, { useState } from "react";
import Button from "../common/Button/Button";
import shallow from "zustand/shallow";
import Intro2D from "./Intro2D";
import {useGameStore} from "../../stores/gameStore";
import Label2D from "./Label2D";
import BoardGame2D from "./BoardGame2D";

const Game2D = () => {
  const [isGameInit, gameInit] = useState(false);
  const [startButtonReady, setStartButtonReady] = useState(false);

  const {startGame, points, timeLeft} = useGameStore(
    (state) => ({
      points: state.points,
      timeLeft: state.timeLeft,
      startGame: state.startGame,
    }),
    shallow
  );

  const initGame = () => {
    gameInit(true);
    startGame();
  };

  return !isGameInit ? (
    <div className="start-btn">
      <Intro2D onReady={() => setStartButtonReady(true)} />
      {startButtonReady && (
        <Button animate onClick={initGame}>
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
    ) : (
    <div>
      <div className="info">
        <Label2D label="Score" value={points} />
        <Label2D label="Time" value={timeLeft} align="right" />
      </div>
      <BoardGame2D />
      <style jsx>{`
        .info {
          display: flex;
          flex-flow: row nowrap;
          width: 100%;
          justify-content: space-between;
        }
      `}</style>
    </div>
    );
};

export default Game2D;
