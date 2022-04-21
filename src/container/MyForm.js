import React,{useEffect, useState} from 'react'

function MyForm(props) {


    useEffect(()=>{
      console.log("inputs",props.inputs)
    },[props.inputs])
  const handleChange = (event) => {
    
  
    props.setInputs(values => ({...values, [event.target.name]:event.target.value}))
    
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const name=props.inputs.username;
    const age = props.inputs.age;
    const userDetail = "Name : " + name +"\n"+"Age : "+ age
    alert(userDetail);
  }
  return (
    
    
      
        <form onSubmit={(event)=>handleSubmit(event)}>
          <label>Enter your name:
          <input 
            type="text" 
            name="username" 
            value={props.inputs.username} 
            onChange={(event)=>handleChange(event)}
          />
          </label>
          <label>Enter your age:
            <input 
              type="number" 
              name="age" 
              value={props.inputs.age} 
              onChange={(event)=>handleChange(event)}
            />
            </label>
            <input type="submit" />
        </form>
      )
    }
    
  


export default MyForm