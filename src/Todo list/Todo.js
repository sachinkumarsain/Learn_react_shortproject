import React, { useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function Todo() {
  const colorText = "abcdefgh1234567890";
  const splitted = colorText.split("")
  const [Name, setName] = useState('')
  const [liValue, setliValue] = useState([])

  function Changehandler(e) {
    // console.log(e.target.value)
    setName(e.target.value)
  }
  function showLi(e) {
    e.preventDefault()
    setliValue([...liValue, Name])
    setName('')
  }
  function randomColor() {
    const output = ''
    for (let i = 0; i < 6; i++) {
      output += (Math.floor(Math.random() * splitted.length))
    }
    // return("#"+output)      
    console.log(output)

  }
  function deleteIcon(element, index) {
    element.preventDefault()
    liValue.filter((task  , id) => {
      return id !== index
    })
  }
  return (
    <div>
      {/* <randomColor/> */}
      <form onSubmit={showLi}>
        <input type='text'
          placeholder='Text msg'
          onChange={Changehandler}
          value={Name}
        ></input>
        <button type='submit'>Add</button>
      </form>
      <ul>
        {
          liValue.map((task) => {
            return (
              <li style={{ listStyle: "none", }}>

                <a style={{ display: "flex", alignItems: "center", color: { randomColor }, textDecoration: "none" }} href='' >{task} <DeleteIcon onClick={(element, index) => { deleteIcon(element, index) }} 
                />< EditIcon/></a>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default Todo