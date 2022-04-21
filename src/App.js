import Container from './container/container'
import C from './container/container'
import './App.css';
import { useState, useEffect } from "react";
import Goal from './container/conditional'
import MyForm from './container/MyForm';


function App() {
  const [inputs, setInputs] = useState({});
  
  return (
    <>
    <Container/>
    <Goal isGoal={true} />
    <MyForm inputs={inputs} setInputs={setInputs}/>
    </>
  );
  
}

export default App;
