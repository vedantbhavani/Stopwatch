/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import './App.css'

const Seconds = () => {
    const [IsRunning, setIsRunning] = useState(false)
    const [time, settime] = useState(0)

    let timer;
    useEffect(() => {
        if (IsRunning) {
            timer = setInterval(() => {
                settime((previos) => previos + 1)
            }, 1000);
        }
        else {
            clearInterval(timer)
        }
        return () => clearInterval(timer)
    }, [IsRunning])

    const ReStartTime = () => {
        settime(0)
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
                <div className="timer">{time}</div>
                <button onClick={ReStartTime} >ReStart</button>
                <button onClick={StartTime} disabled={IsRunning}>Start</button>
                <button onClick={StopTime} disabled={!IsRunning}>Stop</button>
            </div>
        </>
    )
}

export default Seconds;