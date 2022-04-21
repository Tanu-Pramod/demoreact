import React,{useEffect, useState,} from 'react';
import ReactDOM from 'react-dom';
import Child from './child'
const Container = () => {
  // const [state, setState] = useState(false)
  const [show, setShow] = useState(true) // this.state.show = true
  
  const handleDelBtn = ()=>{
    setShow(!show) //false
  
  }
  let myheader;
    if (show) {
      myheader = <Child />;
    }
 
  return (
    <React.Fragment>
    
      {myheader}
      <button type="button" onClick={handleDelBtn}>Delete Header</button>
    </React.Fragment>
  )
}

export default Container;