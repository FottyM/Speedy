var React = require('react');
var ReactDOM = require('react-dom');

module.exports = React.createClass({

  render : function () {

    var score = Math.random();
    var speed = Math.floor(Math.random() + score);

    return (<div>
      <p>Words per minute: {speed} </p>
      <p>Score: {score} </p>

    </div>)
  }

});
