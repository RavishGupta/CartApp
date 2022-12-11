import React from "react";
import './calc.css';

class calculator extends React.Component{    
    constructor(){
        super();
        this.state={
            number:2
        }
    }
    add = () => {
        this.setState((prevState)=>{
            return{
                number : prevState.number+2
            }
        });
    }
    square=()=>{
        const {number}= this.state;
        this.setState((prevState)=>{
            return{
                number : prevState.number*number
            }
        });
    }

    double=()=>{
        this.setState((prevState)=>{
            return{
                number: prevState.number*2
            }
        });
    }

    divide=()=>{
        this.setState((prevState)=>{
            return{
                number:prevState.number/2
            }
        });
    }
    subtract=()=>{
        const {number}= this.state;
        this.setState((prevState)=>{
            if(number==0){
                return;
            }
            return{
                number:prevState.number-2
            }
        });
    }
    

    render(){
        const {number}= this.state;
        return(
            <div className="parent_class">
                <div className="number_display">{number}</div>
                <div style={{color:'#777'}} onClick={this.add.bind(this)}>Add 2!</div>
                <div style={{color:'#777'}} onClick={this.square.bind(this)}>Square !</div>
                <div style={{color:'#777'}} onClick={this.double.bind(this)}>Double !</div>
                <div style={{color:'#777'}} onClick={this.divide.bind(this)}>DivideBy2 !</div>
                <div style={{color:'#777'}} onClick={this.subtract.bind(this)}>SubtractBy2 !</div>
            </div>
        );
    }
}

export default calculator