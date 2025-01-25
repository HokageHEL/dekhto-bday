import React, { useEffect, useState } from "react";
import Confetti from "canvas-confetti";
import "./App.css";
import { msg } from "./msg";
import oneCoin from "./img/fummo.png";

function App() {
  const [congratulations, setCongratulations] = useState(
    "тут буде текст привітання"
  );

  useEffect(() => {
    document.title = "Happy Birthday";
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
    Confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });

    const rnd = Math.floor(Math.random() * msg.length);

    setCongratulations(msg[rnd]);
  };

  return (
    <div className="App">
      <div className="container">
        <header className="header">
          <h1>
            Влад, з днем народження!
            <br />
            <h1 className="bottom-line">|</h1>
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
