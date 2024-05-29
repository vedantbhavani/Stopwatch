/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import './App.css'

const Minutes = () => {
  const [minutes, setminutes] = useState(0)
  const [seconds, setseconds] = useState(0)

  let timer;
  useEffect(()=>{
    timer = setInterval(() => {
      setseconds(seconds+1)
      if(seconds===60){
        setminutes(minutes+1)
        setseconds(0)
      }
    }, 1000);
    return()=> clearInterval(timer)
})

  const ReStartTime = () => {
    setseconds(0)
    setminutes(0)
  }
  
  const StopTime = () => {
    clearInterval(timer)
  }
  
  return (
    <>
      <div className="container">
        <div className="timer">{minutes<10?"0"+minutes:minutes}:{seconds<10?"0"+seconds:seconds}</div>
        <button onClick={ReStartTime}>ReStart</button>
        <button onClick={StopTime}>Stop</button>
      </div>
    </>
  )
}

export default Minutes;