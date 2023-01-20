import React from 'react'
export default function GameDetails({gameDescription}) {
  return (
    <section className='game-details'>
      <p className='game-description'>{gameDescription}</p>
    </section>
  )
}
