import ReactDOM from 'react-dom';
import React from "react";

const index = 0;

class Clock extends React.Component{

  state = {date: new Date() };

  componentDidMount(){
    this.clockTimer = setInterval(() => this.tick(), 1000)
  }

  componentWillUnmount(){
    clearInterval(this.clockTimer)
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }
  render(){

      return (
      <h1 className="heading" tabIndex={index}>
        <span className="text">Hello World {this.state.date.toLocaleTimeString(this.props.locale)}</span>
      </h1>
    )
  }
  
}

export default Clock;