import React, { useState } from "react";
import SurpriseModal from "./SurpriseModal";
import "./BalloonGame.css";

const surprises = [
  "💋 Kiss Coupon",
  "🎥 Movie Night Together",
  "🥞 Breakfast in Bed",
  "🌹 Romantic Dinner",
  "💆 Massage for You",
  "🌴 Weekend Date",
  "☕ Coffee Date",
  "🎶 Sing You a Song",
  "🍫 Chocolate Surprise",
  "💖 Endless Love"
];

function BalloonGame() {
  const [popped, setPopped] = useState([]);
  const [surprise, setSurprise] = useState(null);

  const popBalloon = (index) => {
    if (!popped.includes(index)) {
      setPopped([...popped, index]);
      const randomMessage =
        surprises[Math.floor(Math.random() * surprises.length)];
      setSurprise(randomMessage);
    }
  };

  return (
    <div className="balloon-game">
      <h2 className="game-title">🎈 Tap the Balloons for Surprises!</h2>
      <div className="balloon-container">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className={`balloon ${popped.includes(index) ? "popped" : ""}`}
            onClick={() => popBalloon(index)}
          >
            🎈
          </div>
        ))}
      </div>

      {/* Surprise Modal */}
      <SurpriseModal message={surprise} onClose={() => setSurprise(null)} />
    </div>
  );
}

export default BalloonGame;
