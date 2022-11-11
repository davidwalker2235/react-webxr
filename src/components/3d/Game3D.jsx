import { Canvas } from "@react-three/fiber";
import React, { Suspense, useState } from "react";
import { OrbitControls, Environment } from "@react-three/drei";
import { VRButton, XR, Hands } from "@react-three/xr";
import Player3D from "./Player3D";
import { useGameStore } from "../../stores/gameStore";
import shallow from "zustand/shallow";
import Button3D from "./Button3D";
import GameController3D from "./GameController3D";
import { useRouter } from "next/router";

const VR_SESSION_FEATURES = [
  "local-floor",
  "bounded-floor",
  "hand-tracking",
  "layers",
];

const Game3D = () => {
  const [isGameInit, gameInit] = useState(false);
  const { startGame, gameStarted } = useGameStore(
    (state) => ({
      startGame: state.startGame,
      gameStarted: state.gameStarted,
    }),
    shallow
  );

  const router = useRouter();

  const initGame = () => {
    if (!gameStarted) {
      gameInit(true);
      startGame();
    }
  };

  const onGameEnd = () => {
    router.push("/game-result");
    gameInit(false);
  };

  return (
    <div>
      <VRButton
        sessionInit={{
          optionalFeatures: VR_SESSION_FEATURES,
        }}
      >
        Enter VR
      </VRButton>
      <Canvas shadows camera={{ position: [8, 1.5, 8], fov: 25 }}>
        <XR>
          <GameController3D isGameInit={isGameInit} onGameEnd={onGameEnd} />
          <Player3D />
          <Suspense fallback={null}>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <OrbitControls autoRotate={false} />
            <Environment preset="city" />
            {!gameStarted && (
              <Button3D onInteraction={() => initGame()}>
                Touch to start
              </Button3D>
            )}
          </Suspense>
        </XR>
      </Canvas>
      <style jsx>{`
        div {
          height: 600px;
          background: black;
        }
      `}</style>
    </div>
  );
};

export default Game3D;
