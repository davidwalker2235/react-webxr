import React from "react";

const HighScoreBoard = ({ scores = [] }) => {
  return (
    <div>
      <table className="table">
        <thead>
        <tr>
          <th>Rank</th>
          <th>Score</th>
          <th>Name</th>
        </tr>
        </thead>
        <tbody>
        {scores.map((score, index) => (
          <tr key={index}>
            <td>#{index + 1}</td>
            <td>{score.score}</td>
            <td>{score.name}</td>
          </tr>
        ))}
        </tbody>
      </table>
      <style jsx>{`
        .table {
          width: 100%;
          padding: 12px;
        }
        
        .table th {
          border-bottom: 2px solid white;
        }
        
        .table tr {
          text-align: center;
        }
        
        .table td {
          text-transform: uppercase;
        }
      `}</style>
    </div>
  );
};

export default HighScoreBoard;
