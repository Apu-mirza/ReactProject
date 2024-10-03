
import ReactDOM from 'react-dom';
import React from "react";

const index = 0;

class Clock extends React.Component{

  render(){

      return (
      <h1 className="heading" tabIndex={index}>
        <span className="text">Hello World {this.props.children} {new Date().toLocaleTimeString(this.props.locale)}</span>
      </h1>
    )
  }
  
}
  ReactDOM.render(<Clock locale="bn-BD">test</Clock>, document.getElementById('root'));

