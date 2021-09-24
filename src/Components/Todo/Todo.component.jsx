import React, { Component } from 'react'
import TodoDisplay from '../Todo Display/TodoDisplay.componet'
import Styles from './Todo.module.css'

export default class Todo extends Component {

    constructor(props){
        super(props)
        let isLSAvail = localStorage.getItem("Items")

        if(isLSAvail){
            this.state={
                items:[...JSON.parse(isLSAvail)],
                currentItem:{
                    text:'',
                    key: ''
                }
            }
        }else{
            this.state={
                items:[],
                currentItem:{
                    text:'',
                    key: ''
                }
            }
        }
        this.handleChange = this.handleChange.bind(this)
        
    }
    

    deleteItem = (key) => {
        const filteredItem = this.state.items.filter((item)=>item.key!==key)
        this.setState({
            items:filteredItem
        })
     
        localStorage.setItem("Items", JSON.stringify(filteredItem))
        
    }

    handleEdit = (e,key) => {
      
        const editedItem = this.state.items.map((item)=>{
            if(item.key === key){
                item.text = e.target.value
            }
            return item
        })

        const FinalEdited = editedItem.filter((item)=>{
            return item.text !== ""
        })

        this.setState({
            items: FinalEdited
        })
        
        localStorage.setItem('Items', JSON.stringify(FinalEdited))
    }

    handleSubmit = (e) => {
        e.preventDefault()
        if(this.state.currentItem.text!==""){
            this.setState({
                items:[...this.state.items,this.state.currentItem],
                currentItem:{
                    text:'',
                    key: ''
                }
            })

            localStorage.setItem("Items",JSON.stringify([...this.state.items, this.state.currentItem]))

        }else{
            alert("chl chl ave")
        }
    }

    handleChange(e) {
        this.setState({
            currentItem:{
                text:e.target.value,
                key: Date.now()
            }
        })
    }
    
    render() {
        let {currentItem,items} = this.state;
        return (
            <>
                <div className={Styles.mainCont} >
                    <form onSubmit={this.handleSubmit} >
                        <input className={Styles.inputField} placeholder="Enter Todo" type="text" value={currentItem.text} onChange={this.handleChange} />
                        <button className={Styles.addBtn}  type='submit' >Add</button>
                    </form>
                        <TodoDisplay deleteItem={this.deleteItem} handleEdit={this.handleEdit} items={items} />
                    
                </div>
            </>
        )
    }
}
