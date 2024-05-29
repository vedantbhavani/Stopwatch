/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import './App.css'

const Seconds = () => {
    const [IsRunning, setIsRunning] = useState(false)
    const [second, setsecond] = useState(0)
    const [minute, setminute] = useState(0)
    const [milisec, setmilisec] = useState(0)

    let timer;
    useEffect(() => {
        if (IsRunning) {
            timer = setInterval(() => {
                setmilisec((milisec)=>milisec+1)
                if(milisec===62){
                    setsecond(second+1)
                    setmilisec(0)
                }
                if(second===59){
                    setminute(minute+1)
                    setsecond(0)
                }
            }, 10);
        }
        else {
            clearInterval(timer)
        }
        return () => clearInterval(timer)
    })

    const ReStartTime = () => {
        setsecond(0)
        setminute(0)
        setmilisec(0)
    }
    const StartTime = () => {
        if (!IsRunning) {
            setIsRunning(true)
        }
    }

    const StopTime = () => {
        if(IsRunning){
            setIsRunning(false)
        }
    }

    return (
        <>
            <div className="container">
                <div className="timer">{minute<10?"0"+minute : minute} : {second<10 ? "0"+second :second}<span className='milisec'>:{milisec<10 ? "0"+milisec : milisec}</span></div>
                <div className="startstop">
                <button onClick={StartTime} disabled={IsRunning}>Start</button>
                <button onClick={StopTime} disabled={!IsRunning}>Stop</button>
                </div>
                <button onClick={ReStartTime} >ReStart</button>
            </div>
        </>
    )
}

export default Seconds;