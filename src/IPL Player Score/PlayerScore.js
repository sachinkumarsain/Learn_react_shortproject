import React, { useEffect, useState } from 'react'
import "./PlayerScore.css"
import axios from 'axios'

function PlayerScore() {
    const[scorePlayer,setScorePlayer]=useState([])
    const[sortScore,setSortScore]=useState([])
    useEffect(()=>{
        axios.get(" https://my-json-server.typicode.com/FreSauce/json-ipl/data")
        .then((result)=>{
             setScorePlayer(result.data)

            console.log(result.data)
        })
    })
    // scorePlayer.map((item)=>{
    //     return setSortScore(item.NRR)
    // })
    // console.log(sortScore)
  return (
    <>
    <h1 class="title">IPL Season 2022 Points</h1>
    <table>
      <thead>
        <tr>
          <th>No</th>
          <th>Team</th>
          <th>Matches</th>
          <th>Won</th>
          <th>Lost</th>
          <th>Tied</th>
          <th>NRR</th>
          <th>Points</th>
        </tr>
      </thead>
      <tbody>
            {
                sortScore.map((item)=>{
                    return <tr>
                        <th>{item.No}</th>
                        <th style={{textAlign:"left"}}>{item.Team}</th>
                        <th>{item.matches}</th>
                        <th>{item.Won}</th>
                        <th>{item.Lost}</th>
                        <th>{item.Tied}</th>
                        <th>{item.NRR}</th>
                        <th>{item.Points}</th>
                    </tr>
                    
                })
            }
      </tbody>
    </table>
    </>
  )
}

export default PlayerScore