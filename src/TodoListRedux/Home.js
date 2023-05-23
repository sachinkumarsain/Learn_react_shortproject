
import React from 'react'
import { setInput, setTasks ,deleteTask,editTask,checkTask } from './Slices/TodoListSlice'
import { useSelector, useDispatch } from 'react-redux'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import "./home.css"
function Home() {
  const dispatch = useDispatch()
  const intial= useSelector((state) => {
    return state.todo
  })
  function handleSubmit (e){
    e.preventDefault()
    dispatch(setTasks())

  }
  function handleDelete(e,index){
    e.preventDefault()
  dispatch( deleteTask(index))
   


  }
  function handleEdit(e,index){
    e.preventDefault()
    dispatch(editTask(index))
  }
  function handleCheck (e,index){
    e.preventDefault()
    dispatch(checkTask(index))
  }
  return (
    <>
    <div className='container'>
      <form  autoFocus onSubmit={handleSubmit} autoFocus             >
        <input autoFocus type='text' placeholder='enter name' value={intial.input} onChange={(e) => dispatch(setInput(e.target.value))} >
        </input>
        <button type='submit'>add task</button>
      </form>
      <ol>
        {
          intial.tasks.map((task,index)=>{
            return(
              <li key={index} className={intial.complet.includes(index)?"completed":""}>{task}
              <a onClick={(e)=>handleDelete(e,index)} href=''><DeleteIcon/></a>
              <a onClick={(e)=>handleEdit(e,index)} href=''><EditIcon/></a>
              <a onClick={(e)=>handleCheck(e,index)} href=''><CheckBoxIcon/></a>
              </li>
            )
          })
        }
      </ol>
      </div>
    </>
  )
}

export default Home