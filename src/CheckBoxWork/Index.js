import React, { useState } from 'react'

function Index() {
    //......................useState................//

    const[tank , setTank]=useState ([
        {id:"1" , value:"HTML"},
        {id:"2" ,value:"css"},
        {id:"3", value:"js"},
        {id:"4",value:"react"}
    ])

    const [oneTank, setOneTank] = useState([])
    const [leftToList, setLeftToList] = useState([])
    const [ secondTank , setSecondTank] = useState([])
    const [ listId , setlistId ]= useState([])


    //..............................functions................//
    
    function handleOne(e) {
        if (e.target.checked === true) {
            
            setlistId([...listId ,e.target.id])

           

            setOneTank([...oneTank, {
                id: e.target.id,
                value: e.target.value
            }])
        }
        else {
            setOneTank(oneTank.filter((list) => {
                return list.id !== e.target.id
            }))
        }

    }
    

    function hanldeSecond (e){
        if (e.target.checked === true) {
            
            // setlistId([...listId ,e.target.id])

            setlistId(e.target.id)

            setSecondTank([...secondTank, {
                id: e.target.id,
                value: e.target.value
            }])
        }
        else {
            setSecondTank(secondTank.filter((list) => {
                return list.id !== e.target.id
            }))
        }

    }




    function leftToRight() {
        console.log(tank, listId)
        console.log( tank.filter((list)=>{
            return listId.map((id)=>{
                return list.id!==id
            })
        }))
        setLeftToList([...oneTank])

    }
    function rightToLeft(){
        setLeftToList(leftToList.filter((list)=>{
            return list.id !==listId
        }))
       setTank([...tank ,...secondTank])

    }
    return (
        <>
            <div className='.wapper'>
                <div className='left'>

                    <ul style={{listStyle:"none"}}>
                        {
                            tank.map((list, index)=>{
                                return <li key={index}>
                                    <input type='checkbox' value={list.value} id={list.id} onChange={handleOne}/>{list.value}
                                </li>
                            })
                        }
                    </ul>


                </div>
                <div className=''>
                    <button onClick={leftToRight}>Left To Right</button>
                    <button onClick={rightToLeft}>Right To Left</button>
                </div>
                <div className=' right'>
                    <ul style={{listStyle:"none"}}>
                        {
                            leftToList.map((list , index) => {
                                return <li key={index}>
                                    <input  id={list.id} type='checkbox' value={list.value} onChange={hanldeSecond} />{list.value}
                                </li>
                            })
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Index