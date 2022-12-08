import React from 'react'
import "./GameCards.css";
function GameCards({data}) {
  // console.log("game",data)
  return (
 <div className='game_cards_layout'>
 {data.map(val=>{
  return(
    <div className='game_cards'>
    <div className='game_card_1'></div>
    <div className='game_card_content'>
       <div>
         <p className='game_title'>{val.name}</p>
        
         <p className='sub_title'>Release Date: {val.first_release_date}</p>
     
         <p className='game_text'>{val.summary}</p>
       </div>
       <div className='game_score'>{Math.ceil(val.rating)}</div>
    </div>
    

  </div>
  )
 })}
 </div>
  )
}

export default GameCards