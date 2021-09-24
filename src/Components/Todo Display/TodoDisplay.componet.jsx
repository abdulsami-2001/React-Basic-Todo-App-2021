import React from 'react'
import Style from './TodoDisplay.module.css'
import {RiDeleteBinLine} from 'react-icons/ri'
import FlipMove from 'react-flip-move'

const TodoDisplay = (props) => {
    let {items, handleEdit,deleteItem}  =  props
  
    if(items.length){
        return(
            <FlipMove easing='ease-in-out' duration={350} >
            {items.map((item)=>{
                return <div key={item.key} className={Style.displayTodo}>
                    <input type="text" className={Style.displayTodoInput} onChange={(e)=>handleEdit(e, item.key)} value={item.text} />
                    <RiDeleteBinLine size={22} className={Style.displayTodoX} onClick={()=>deleteItem(item.key)}   />
                </div>
            })}
            </FlipMove>
    )
    }else{
        return <p style={{display:'flex', fontFamily:'sans-serif', fontSize:"25px" ,justifyContent:'center',alignItems:"center", height:"300px", color:"#e3d8f1"}} >No Todo Yet, Add Todo</p>
    }
}

export default TodoDisplay
