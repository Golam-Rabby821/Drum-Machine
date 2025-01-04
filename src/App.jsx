import { useState, useEffect, useRef } from "react";

function App() {
  const [display, setDisplay] = useState(""); // State for the display text
  const [activeKey, setActiveKey] = useState(""); // State for the active key (for styling)
  const [power, setPower] = useState(true); // Power state (true = ON, false = OFF)
  const [volume, setVolume] = useState(0.5); // State for volume control
  const [bank, setBank] = useState(false); // Bank state (false = Bank 1, true = Bank 2)

  // Create refs for each audio element
  const audioRefs = useRef({});

  // Bank 1 sounds
  const bankOne = [
    {
      key: "Q",
      sound: "Heater-1",
      audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    },
    {
      key: "W",
      sound: "Heater-2",
      audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    },
    {
      key: "E",
      sound: "Heater-3",
      audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    },
    {
      key: "A",
      sound: "Heater-4",
      audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    },
    {
      key: "S",
      sound: "Clap",
      audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    },
    {
      key: "D",
      sound: "Open-HH",
      audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    },
    {
      key: "Z",
      sound: "Kick-n'-Hat",
      audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    },
    {
      key: "X",
      sound: "Kick",
      audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    },
    {
      key: "C",
      sound: "Closed-HH",
      audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    },
  ];

  // Bank 2 sounds
  const bankTwo = [
    {
      key: "Q",
      sound: "Chord-1",
      audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",
    },
    {
      key: "W",
      sound: "Chord-2",
      audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3",
    },
    {
      key: "E",
      sound: "Chord-3",
      audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3",
    },
    {
      key: "A",
      sound: "Shaker",
      audioSrc:
        "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3",
    },
    {
      key: "S",
      sound: "Open-HH",
      audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3",
    },
    {
      key: "D",
      sound: "Closed-HH",
      audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3",
    },
    {
      key: "Z",
      sound: "Punchy-Kick",
      audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",
    },
    {
      key: "X",
      sound: "Side-Stick",
      audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",
    },
    {
      key: "C",
      sound: "Snare",
      audioSrc: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3",
    },
  ];

  const drumPads = bank ? bankTwo : bankOne;

  const handleClick = (key, sound) => {
    const audioElement = audioRefs.current[key]; // Access the audio element using the ref
    if (power) {
      audioElement.volume = volume;
      audioElement.currentTime = 0;
      audioElement.play();
      setDisplay(sound);
      setActiveKey(key);

      // Remove active key after 200ms
      setTimeout(() => setActiveKey(""), 200);
    }
  };

  const handleKeyPress = (event) => {
    const keyPressed = event.key.toUpperCase();
    const drumPad = drumPads.find((pad) => pad.key === keyPressed);
    if (drumPad) {
      handleClick(drumPad.key, drumPad.sound);
    }
  };

  // Reset display when power, volume, or bank changes
  useEffect(() => {
    if (!power) {
      setDisplay("Power Off");
    } else {
      setDisplay("Press a key!");
    }
  }, [power, volume, bank]); // Reset display on power, volume, or bank changes

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [drumPads]);

  return (
    <div className="w-full min-h-screen pb-6 bg-slate-700">
      <h1 className="text-3xl text-center pt-7 text-slate-100 font-bold">
        Drum Machine
      </h1>

      <div
        id="drum-machine"
        className="flex flex-col items-center md:gap-5 bg-slate-400 md:w-[800px] w-11/12 md:h-[450px] h-[600px] p-5 mt-10 mx-auto rounded-md md:flex-row"
      >
        {/* Drum Keypad */}
        <div className="grid grid-cols-3 gap-2 h-5/6 my-2 mx-auto w-5/6 md:w-6/12">
          {drumPads.map((pad) => (
            <div
              key={pad.key}
              id={pad.key}
              className={`drum-pad p-4 text-2xl text-center font-bold rounded-md cursor-pointer flex justify-center items-center transition-all duration-200 ${
                activeKey === pad.key
                  ? "bg-rose-500 text-white"
                  : "bg-slate-200 hover:bg-gray-300"
              }`}
              onClick={() => handleClick(pad.key, pad.sound)}
            >
              {pad.key}
              <audio
                ref={(el) => (audioRefs.current[pad.key] = el)}
                id={pad.key}
                className="clip"
                src={pad.audioSrc}
              ></audio>
            </div>
          ))}
        </div>

        {/* Display Controls */}
        <div className="flex flex-col bg-slate-800 h-5/6 py-4 my-2 mx-auto w-5/6 md:w-6/12 items-center justify-evenly text-slate-100 rounded-md">
          {/* Power Switch */}
          <div className="flex flex-col items-center w-3/4 mb-4">
            <label htmlFor="power-switch" className="text-lg my-1">
              Power
            </label>
            <div
              onClick={() => setPower(!power)}
              className="relative w-[80px] h-7 bg-gray-500 cursor-pointer"
            >
              <div
                className={`w-[40px] h-full bg-green-500  transition-all duration-300 ${
                  power
                    ? "transform translate-x-0"
                    : "transform translate-x-full bg-gray-400"
                }`}
              ></div>
            </div>
            <div className="flex justify-between w-[80px] mt-1">
              <span className="text-xs">Off</span>
              <span className="text-xs">On</span>
            </div>
          </div>

          {/* Display Sound */}
          <p
            id="display"
            className="text-xl p-2 bg-slate-600 rounded-md w-3/4 text-center"
          >
            {power ? display || "Press a key!" : "Power Off"}
          </p>

          {/* Volume Slider */}
          <div className="flex flex-col items-center w-3/4 my-7">
            <input
              id="volume-slider"
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={(e) => setVolume(Number(e.target.value))}
              className="w-full appearance-none bg-gray-600 h-2 rounded transition-all"
              style={{
                background: `linear-gradient(to right, #f43f5e ${
                  volume * 100
                }%, #d1d5db ${volume * 100}%)`,
              }}
            />
            <div className="w-full flex justify-between mt-2 px-2">
              <span className="text-xs">0</span>
              <span className="text-xs">0.25</span>
              <span className="text-xs">0.5</span>
              <span className="text-xs">0.75</span>
              <span className="text-xs">1</span>
            </div>
          </div>

          {/* Bank Switch */}
          <div className="flex flex-col items-center w-3/4">
            <label htmlFor="bank-switch" className="text-lg my-1">
              Bank
            </label>
            <div
              onClick={() => setBank(!bank)}
              className="relative w-[80px] h-7 bg-gray-500 cursor-pointer"
            >
              <div
                className={`w-[40px] h-full bg-blue-500  transition-all duration-300 ${
                  bank
                    ? "transform translate-x-full bg-blue-500"
                    : "transform translate-x-0"
                }`}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center font-semibold text-md py-4 text-gray-300">
        <p>
          Created by [
          <a
            href="https://www.linkedin.com/in/golamrabby-/"
            target="_blank"
            className="text-red-500"
          >
            Golam Rabby
          </a>
          ]
        </p>
      </footer>
    </div>
  );
}

export default App;
