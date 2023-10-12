import React,{ Component } from "react";
import './Body.css';

class Bod extends Component {
  constructor(){
    super();
    this.state={count:0,};
    
  }
  increment = () => {
    this.setState((prevState) => ({
      count:prevState.count+1}));
  };
  decrement = ()=>{
    this.setState((prevState) => ({
      count:prevState.count - 1}));
    };
  render(){
    return(
      <div style={{backgroundColor:'lavenderblush',textAlign:'center'}}>
        <h1>Counter</h1>
        <p>{this.state.count}</p>
        <button type='click' onClick={this.increment}>Increment</button><br></br>
        <br></br>
        <button type='click' onClick={this.decrement}>Decrement</button>
      </div>
      
    );
  }
}   
   

export default Bod
/*import React from 'react'

const Bod = () => {
  return (
    <>
    <div></div>
    <center>
    <form>
        <fieldset >
        <legend style={{color:'red' }}>Fill the form</legend>
        <table>
            <tr>
        <td><lable>Enter name:</lable></td>
        <td><input type='text'></input></td></tr>
        <tr>
            <td><lable>Enter email:</lable></td>
        <td><input type='text'></input></td>
        </tr>
        
        <tr>
            <td>
                <lable>Enter password:</lable></td>
        <td><input type='password'></input></td>
        </tr>
        <button>Submit</button>
        </table>
        </fieldset>
    </form>
    </center>
    </>
  )
}*/

