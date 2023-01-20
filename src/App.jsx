import GameInfoRow from "./components/GameInfoRow";
import GameDetails from "./components/GameDetails";
import GameTitle from "./components/GameTitle";
import "./css/App.css";
import { useState, createContext } from "react";

export const GameContext = createContext();
const gameAry = [
  {
    name: "Sekiro: Shadows Die Twice",
    pic: "https://picsum.photos/200/200?random=1",
    description:
      "Sekiro: Shadows Die Twice is an action-adventure game developed by FromSoftware and published by Activision. Players control a shinobi named Sekiro as he fights against various enemies in a fictionalized version of Sengoku-era Japan.",
    isActive: true,
  },
  {
    name: "God of War",
    pic: "https://picsum.photos/200/200?random=2",
    description:
      "God of War is an action-adventure game developed by Santa Monica Studio and published by Sony Interactive Entertainment. Players control a character named Kratos as he fights against gods and monsters in ancient Greece.",
    isActive: false,
  },
  {
    name: "Horizon Forbidden West",
    pic: "https://picsum.photos/200/200?random=3",
    description:
      "Horizon Forbidden West is an action role-playing game developed by Guerilla Games and published by Sony Interactive Entertainment. It is the sequel to Horizon Zero Dawn and continues the story of Aloy as she travels to the forbidden west in search of the truth about the old world.",
    isActive: false,
  },
  {
    name: "The Last of Us Part II",
    pic: "https://picsum.photos/200/200?random=4",
    description:
      "The Last of Us Part II is a survival horror game developed by Naughty Dog and published by Sony Interactive Entertainment. Players control a character named Ellie as she navigates through a post-apocalyptic world overrun by infected humans and hostile factions.",
    isActive: false,
  },
  {
    name: "Detroit: Become Human",
    pic: "https://picsum.photos/200/200?random=5",
    description:
      "Detroit: Become Human is a narrative-driven adventure game developed by Quantic Dream and published by Sony Interactive Entertainment. Players control multiple characters as they make choices that affect the story and its outcomes.",
    isActive: false,
  },
  {
    name: "Final Fantasy VII Remake",
    pic: "https://picsum.photos/200/200?random=6",
    description:
      "Final Fantasy VII Remake is a action role-playing game developed and published by Square Enix. It is a retelling of the original Final Fantasy VII game, which was released in 1997. Players control a character named Cloud Strife as he fights against the corrupt Shinra corporation and Sepiroth.",
    isActive: false,
  },
  {
    name: "Detroit: Become Human",
    pic: "https://picsum.photos/200/200?random=5",
    description:
      "Detroit: Become Human is a narrative-driven adventure game developed by Quantic Dream and published by Sony Interactive Entertainment. Players control multiple characters as they make choices that affect the story and its outcomes.",
    isActive: false,
  },
];
for (const game of gameAry) {
  game.id = crypto.randomUUID();
}
export default function App() {
  const [gameName, setGameName] = useState("");
  const [gameDescription, setGameDescription] = useState('')
  function getGameId(id) {
    const {name, description} = gameAry.find(g => g.id === id)
    setGameName(name);
    setGameDescription(description)
  }
  return (
    <GameContext.Provider value={{ getGameId, gameAry }}>
      <header>
        <GameTitle gameName={gameName} />
      </header>
      <main>
        <GameInfoRow gameAry={gameAry} />
        <GameDetails gameDescription={gameDescription} />
      </main>
    </GameContext.Provider>
  );
}
