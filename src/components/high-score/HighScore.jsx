import React, { useState, useEffect } from "react";
import { scoreService } from "../../services/scoreService";
import Title from "../common/Title/Title";

import HighScoreBoard from "./HighScoreBoard";

const HighScore = () => {
  const [scores, setScores] = useState([]);
  useEffect(() => {
    const getScores = async () => {
      const scores = await scoreService.getScores();
      setScores(scores);
    };
    getScores();
  }, []);
  return (
    <div className="container">
      <Title>Simulator scores</Title>
      <HighScoreBoard scores={scores} />
      <style jsx>{`
        .container {
          width: 100%;
          background-color: #0f2b36;
          border: 4px solid #fb666e;
        }
      `}</style>
    </div>
  );
};

export default HighScore;
