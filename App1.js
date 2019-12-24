// import React, { Component } from "react";
// class App1 extends Component {
//   constructor(props)
//    {
//     super(props);

//       this.state = { A1: " " };
//       }

// handleChange = e1 => {
//   this.setState({ A1: e1.target.value });
// };
// handleclick=()=>
// {
//    this.setState({val:this.state.A1})
// }

// render()
// {
//   return (
//     <div>
//       <h1>welcome to integra</h1>
//       <input type="text" onChange={this.handleChange} ></input>
//       {/* <input type="text" onChange={this.handleinput2} ></input> */}
//       <button onClick={this.handleclick.bind(this)}>add</button>
//       <span>{this.state.val}</span>
//     </div>
//   );
// }
// }
// export default App1;







// import React,{component, Component} from 'react';
// class App2 extends Component{
//     constructor(props)
//     {
//         super(props)
//         this.state={input1:0,input2:0,list:''}
//     }

// change1=(e1)=>
// {
//  this.setState({input1:e1.target.value})
// }

// change2=(e2)=>
// {
//     this.setState({input2:e2.target.value})  
// }


// add=()=>
// {
//     this.setState({list:parseInt(this.state.input1)+parseInt(this.state.input2)})
// }




//     render()
//     {
//     return(
//         <div>
//             <input type="text" onChange={this.change1}></input>
//             <input type="text"onChange={this.change2}></input>
//             <button onClick={this.add}>add</button>
//             <input type="text" value={this.state.list}></input>
//     {/* <span>{this.state.list}</span> */}
//         </div>
//     )
// }
// }
// export default App2;







import React,{Component} from 'react';
import axios from 'axios';

class App1 extends Component{
    constructor(props)
    {
        super(props)
        this.state={input1:' ',list:[]}
    }

    change1=(e1)=>
    {
        this.setState({input1:e1.target.value})
    }
    click=()=>
    {
        axios.post("http://localhost:3004/value",{name:this.state.input1}).then(res=>
        {
            this.setState({list:[...this.state.list,res]})
            this.getting();
        }
        )
    }
    delete=(id)=>
    {
        axios.delete("http://localhost:3004/value/"+id).then(del=>
        {
            
            this.setState({list:[...this.state.list,del]})
            this.getting();
        })
    }
    update=(id1,name1)=>
    {
        this.updname=prompt("Enter your Name to be updated:",name1);
        axios.put("http://localhost:3004/value/"+id1,{name:this.updname}).then(res=>
        {
            this.setState({list:[...this.state.list,res]})
            this.getting();
        })
    }
    getting=()=>    
    {
        axios.get("http://localhost:3004/value").then(res=>
        {
            this.setState({list:res.data})
        }   
        )
    }

    componentDidMount()
    {this.getting();}


    render(){
        return(
            <div>
                <input type="text" onChange={this.change1} style={{backgroundColor:'pink'}} value={this.name1}></input><br></br><br></br>
                <button onClick={this.click} style={{backgroundColor:'peach'}}>show</button><br></br><br></br><br></br>
                
                <ul>
                {
                    this.state.list.map((i)=>{
                    return(  <li key={i.id}>FirstName={i.name}<br></br>
                        <button onClick={this.delete.bind(this,i.id)}>Remove</button>
                        <button onClick={this.update.bind(this,i.id,i.name)}>update</button><br></br><br></br></li>
                        
                        )
                          
                    }

                    )
                }
                
                </ul>

            </div>
        )
    }
}
export default App1;