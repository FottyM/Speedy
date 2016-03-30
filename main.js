var React = require('react');
var ReactDOM = require('react-dom');
var Stats = require('./stats.js');
var RamdomWords = require('./randomwords.js');
var UserInput = require('./userinput.js');

ReactDOM.render(
  <div>
    <h2><RamdomWords/></h2>
    <UserInput/>
    <Stats/>
  </div>
    ,
  document.getElementById('content')
);
