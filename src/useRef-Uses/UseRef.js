import React, { useState ,useRef} from 'react'
import PauseCircleOutlineIcon from '@mui/icons-material/PauseCircleOutline';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import video from "./video.mp4"
import { set } from 'react-hook-form';
import "./UseRef.css"

function UseRef() {
    const [buttonChoose, setButtonChoose]=useState(false)

    const ref = useRef()


    function handlepause(){
        ref.current.pause()
        setButtonChoose(false)

    }
    function handleplay(){
        ref.current.play()
        setButtonChoose(true)
    }
  return (
    <>
    <div className='wapper'>
          <div className='VideoBox'>
            <video ref={ref}>
                <source src={video}></source>
            </video>
            <div className='button'>
                {
                    (buttonChoose)?<button onClick={handlepause}><PauseCircleOutlineIcon/></button>:<button onClick={handleplay}> <PlayCircleOutlineIcon/> </button>
                }
            </div>
          </div>
    </div>
    </>
  )
}

export default UseRef