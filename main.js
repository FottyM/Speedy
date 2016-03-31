import React from 'react'
import ReactDOM from 'react-dom'
import Stats from './stats.js'
import RamdomWords from './randomwords'
import UserInput from'./userinput';

ReactDOM.render(
  <div>
    <h2><RamdomWords/></h2>
    <UserInput/>
    <Stats/>
  </div>,
  document.getElementById('content')
);
