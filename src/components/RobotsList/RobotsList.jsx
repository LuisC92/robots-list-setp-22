import React,{useState} from 'react'
// receive the card component
import RobotsCards from "../RobotsCards/RobotsCards"
// receive data from data.js file
import robotsArray from "../Data/data"
import "./RobotsList.css"

const RobotsList = () => {

  const [robots,setRobots] = useState(robotsArray)
  // map data
  // console.log("Robots", robots)
  const robotsList = robots.map((robot)=> < RobotsCards {...robot}/>)
  return (
    <div className="grid-layout">
      {robotsList}
      {/* // Display Cards Component */}
    </div>
  )
}

export default RobotsList