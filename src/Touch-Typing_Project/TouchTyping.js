import React, { useEffect, useState } from 'react'
import "./TouchTyping.css"


function TouchTyping() {
    const [sentance, setSentance] = useState("")
    const [inputValue, setInputValue] = useState("")
    const [keyCount, setKeyCount] = useState(0)
    const [accuracy, setAccuracy] = useState(0)
    const [keyCounted, setKeyCounted] = useState(false)

    const sentanceContainer = [
        "ggg hgh lnho",
        "jgiyfk ljnj jjmn ",
        "hugh dxf frut oiijio",
        "jgv vhjv vh vv vlkl ",
        "nkjj jk ln klj vgv h",
        "kjfjds jfkjd jkfjkd jbj",
        "hjhd kjfkj ddh huof uhfdo oho"
    ]

    function getRandomSentance() {
        const randomIndex = Math.floor(Math.random() * sentanceContainer.length)
        setSentance(sentanceContainer[randomIndex])
    }

    useEffect(() => {
        getRandomSentance()
    }, [])

    const isCorrect = inputValue === sentance.slice(0, inputValue.length)
    
    function handleKeyCount() {
        if (isCorrect && inputValue.length === sentance.length) {
            setKeyCounted(true)
            setAccuracy(Math.floor((sentance.length/(keyCount + 1))*100))
        }
        setKeyCount(keyCount + 1)
       
    }
    function handleRef (){
        setAccuracy(0)
        setKeyCounted(false)
        setKeyCount(0)
        setInputValue("")
        getRandomSentance()


    }
    return (
        <>
            <div className='container'>
                <div className='box'                >
                    <h1>Touch Typing Test</h1>
                    <h2 style={{ color: (isCorrect) ? "green" : "red" }}>{sentance}</h2>
                    <input type='text' id='text' autoFocus placeholder='Start Typing' value={inputValue} onChange = {(e) => setInputValue(e.target.value)} onKeyUp={handleKeyCount}
                        style={{
                            backgroundColor: (isCorrect) ? "#90EE90" : "#ffcccb",
                            border: (isCorrect) ? "1px solid green" : "1px solid red"
                        }}ence  
                    />
                    {
                        keyCounted ?
                            <div className='miniBox'>
                                <h3>keyCount:{keyCount}</h3>
                                <h3>accuracy:{accuracy}%</h3>
                                <button onClick={handleRef}>Delete</button>
                            </div>
                            : ""
                    }

                </div>
            </div >
        </>
    )
}

export default TouchTyping