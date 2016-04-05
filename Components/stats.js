import React from 'react';
import ReactDOM from 'react-dom';
import RamdomWords from './Randomwords';
import UserInput from './Userinput';

module.exports = React.createClass({


  render : function () {

    var score = Math.random();
    var speed = Math.floor(Math.random() + score);

    return (<div>
      <p> Match: {speed} </p>
      <p> Score: {score} </p>
      {this.props.name}
    </div>)
  }

});
