import React, { Component } from "react";

class App extends Component {
constructor(props)
{
  super(props);
  this.state = {input:'',list:[]}
 
};
handleChange=(e1)=>
{
 this.setState({
 input:e1.target.value
 })
}

  submit = () => {
    
   this.setState({
           list:[...this.state.list,{val:this.state.input}],
           input:' '

    
    })
  
    console.log("welcome to classdemo ");
 
  };
  render() {
    return (
      <div>
        <h1>NameList</h1>
        <input type="text" onChange={this.handleChange} style={{backgroundColor:"pink"}}value={this.state.input}></input>
        <button onClick={this.submit.bind(this)} style={{backgroundColor:"pink"}}>Submit</button>
        <br></br>
        <h3 >List Of Names:</h3><ul>
       {this.state.list.map((i)=>
        {
        return(<li key={i.id} style={{color:"teal"}}>{i.val}</li>)
        })}</ul>
      </div>
    );
  }
}
export default App;
