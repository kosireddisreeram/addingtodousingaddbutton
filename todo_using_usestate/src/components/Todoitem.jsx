import React from 'react'

const  Todoitem = (props) => {
console.log(props)

// eslint-disable-next-line no-unused-vars
const {title,id,status,handleRemove,color} = props;


  return (
    <div>
        <h1   style={{color}} >{title}</h1>
        <button  onClick={()=>handleRemove(id)}>Delete</button>
    </div>
  )
}

export default Todoitem;