import GameInfo from "./GameInfo";
import { useState, useEffect } from "react";

export default function GameInfoRow({gameAry}) {
  const [count, setCount] = useState(0)
  const [games, setGames] = useState(gameAry)
  const [isInit, setIsInit] = useState(true)
  useEffect(() => {
    if(isInit){
      setIsInit(false)
      alert('Click on the game row or use the tab key to start navigating the game row with arrow keys')
      return
    }
    handleActiveStyle()
  },[count])
  function handleCarousel(e) {
    if (e.keyCode === 37) {
      if(count === 0) return
      setCount(prevState => prevState + 1)
      
    }else if(e.keyCode === 39){
      if(Math.abs(count) === games.length - 1) return
      setCount(prevState => prevState - 1)
    }
  }
  function handleActiveStyle(){
    const newGameAry = [...games]
    for(const game of newGameAry){
      game.isActive = false
    }
    newGameAry[Math.abs(count)].isActive = true
    setGames(newGameAry)
  }
  return (
    <section>
      <ul
        className="game-info-grid-container"
        tabIndex={1}
        onKeyDown={(e) => handleCarousel(e)}
        style = {{transform :`translateX(${count*210 + 40}px)`}}
      >
        {games.map((game) => (
          <GameInfo name={game.name} pic={game.pic} key={game.id} id={game.id} active={game.isActive} />
        ))}
      </ul>
    </section>
  );
}
