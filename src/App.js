import React, { useState, useEffect, useRef } from "react";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import BalloonGame from "./BalloonGame";
import "./App.css";

function App() {
  const { width, height } = useWindowSize();
  const [index, setIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef(null);

  const loveNotes = [
    "You make every day brighter 💫",
    "I’m grateful for your love 💖",
    "Your smile is my sunshine ☀️",
    "Life is better with you in it 🌎",
    "I admire your strength 💪",
    "You are my safe place 🏡",
    "I love your laugh 😂",
    "You inspire me every day ✨",
    "You are my answered prayer 🙏",
    "My heart belongs to you ❤️",
    "I love our adventures together 🌍",
    "You’re the best mom 💕",
    "You’re my partner in everything 🤝",
    "Your kindness amazes me 🌸",
    "You are my forever love 💍",
    "I’m proud of you 🌟",
    "I love your voice 🎶",
    "You make me a better man 👑",
    "I love how thoughtful you are 💐",
    "You’re beautiful inside and out 🌹",
    "You’re my dream come true 💭",
    "You light up my world 💡",
    "You make hard days easier ☔",
    "I love your hugs 🤗",
    "I cherish our memories 📸",
    "You are my home 🏠",
    "You’re my favorite person 😍",
    "I love your cooking 🍲",
    "I love our talks 💬",
    "You’re one of a kind 💎",
    "You’re my best friend 👯",
    "You’re my rock 🪨",
    "You complete me 🧩",
    "I thank God for you every day 🙌",
    "You’re my happily ever after 🏰",
    "I love you forever ♾️"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev < loveNotes.length - 1 ? prev + 1 : 0));
    }, 4000);
    return () => clearInterval(interval);
  }, [loveNotes.length]);

  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div
      className="app"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/marriage.jpg)`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center 20%",
        backgroundSize: "cover",
      }}
    >
      <Confetti width={width} height={height} />

      <div className="overlay">
        <h1 className="title">Happy 36th Birthday, Sarah! 🎂</h1>
        <p className="subtitle">
          You are my greatest blessing, my joy, and my love forever. 💖
        </p>

        {/* Love Notes */}
        <div className="notes">
          <p key={index} className="note fade">
            {loveNotes[index]}
          </p>
        </div>

        {/* Footer */}
        <div className="footer">Made with ❤️ by Junior</div>

        {/* Music */}
        <audio
          ref={audioRef}
          autoPlay
          loop
          src={`${process.env.PUBLIC_URL}/music.mp3`}
        />
        <button className="music-btn" onClick={toggleMusic}>
          {isPlaying ? "⏸ Pause Music" : "▶️ Play Music"}
        </button>

        {/* 🎮 Birthday Game */}
        <BalloonGame />
      </div>
    </div>
  );
}

export default App;
