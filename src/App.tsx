import React, { useEffect, useState } from "react";
import Confetti from "canvas-confetti";
import "./App.css";
import { msg } from "./msg";
import oneCoin from "./img/frog.png";

function App() {
  const [congratulations, setCongratulations] = useState(
    "тут буде текст привітання"
  );

  useEffect(() => {
    document.title = "🎂 Happy Birthday - Miku Style! 🎵";
  }, []);

  const quaSound = require("./sound/qua.mp3");

  const playSound = () => {
    const audio = new Audio(quaSound);
    audio.play();

    setTimeout(() => {
      audio.play();
    }, 700);
  };

  const handleClick = async () => {
    // Miku-themed confetti with teal, cyan, and pink colors
    const colors = ['#39C5BB', '#00D9FF', '#FFB6C1', '#FF69B4', '#FFFFFF', '#7FFFD4'];
    
    // Multiple confetti bursts for more celebration
    Confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: colors,
    });

    setTimeout(() => {
      Confetti({
        particleCount: 100,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors,
      });
    }, 100);

    setTimeout(() => {
      Confetti({
        particleCount: 100,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors,
      });
    }, 200);

    const rnd = Math.floor(Math.random() * 85);

    setCongratulations(msg[rnd]);
  };

  return (
    <div className="App">
      <div className="container">
        {/* Floating sparkles */}
        <div className="sparkle sparkle-1">✨</div>
        <div className="sparkle sparkle-2">⭐</div>
        <div className="sparkle sparkle-3">✨</div>
        <div className="sparkle sparkle-4">💫</div>
        <div className="sparkle sparkle-5">⭐</div>
        <div className="sparkle sparkle-6">✨</div>
        
        <header className="header">
          <h1>
            Янусю, з днем народження! 🎵
            <br />
            <span className="bottom-line">|</span>
          </h1>
        </header>

        <main className="main">
          <p className="main__text1">
            Ця апка генерує привітання при кліці на кнопку нижче, спробуй!
            <br />
            (замість тисячі привітаннь)
          </p>
          <button
            id="emitter"
            className="main__button button-1"
            onClick={() => handleClick()}
          >
            Привітання!
          </button>

          <div className="main__text">
            <p className="main__text-text">{congratulations}</p>
          </div>

          <div className="main__box-text">
            не забуть забрати свій подарунок
            <br />↓
          </div>

          <div className="box-1" onClick={() => playSound()}>
            <img src={oneCoin} alt="frog" />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
