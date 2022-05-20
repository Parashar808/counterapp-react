import React,{Component} from 'react'
import './counter.css'
class CC extends React.Component{
    constructor(){
        super();
        this.state={
            number:0
        }
    }

    add=()=>{
        this.setState({number:this.state.number+1})
    }
    sub=()=>{
        this.setState({number:this.state.number-1})
    }
    render(){
        return (
            <div className='divclass'>
                <h1 style={{color:'white'}}>{this.state.number}</h1>
                <button onClick={this.add}>Add 1</button>
                <button onClick={this.sub}>Subtract 1</button>
            </div>
        )


    }
}
export default CC