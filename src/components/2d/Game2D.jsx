import React, { useState } from "react";
import Button from "../common/Button/Button";
import shallow from "zustand/shallow";
import Intro2D from "./Intro2D";
import {useGameStore} from "../../stores/gameStore";

const Game2D = () => {
  // 1 - Changes and detects if the game is running
  const [isGameInit, gameInit] = useState(false);
  const [startButtonReady, setStartButtonReady] = useState(false);

  // 3 - Get the info from the store and re-render the component when any prop is changed
  const {startGame} = useGameStore(
    (state) => ({
      startGame: state.startGame,
    }),
    shallow
  );

  // 2 - Init the game using the startGame() function from store
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
      <div>Game started!</div>
    );
};

export default Game2D;
