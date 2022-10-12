import React from 'react'
import "./RobotsCards.css"
const RobotsCards = (props) => {
  const {id, first_name, last_name, email, avatar } = props

  const greetings=()=>{
    alert(`Hello I'm ${first_name} ${last_name}!! Nice to meet you!`)
  }
  return (
    <>
      <div className="container-fluid">
        <div className="card">
          <h2>{`${first_name} ${last_name}`}</h2>
          <img className="robots-avatar" src={avatar} alt={`${first_name} ${last_name}`} />
          <br/>
          <br/>
          <button onClick={greetings}>Greetings{" "}
                ✋{" "}</button>
          <hr/>
        </div>
      </div>
    </>
  )
}

export default RobotsCards