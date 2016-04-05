import React from 'react'
import ReactDOM,{render} from 'react-dom'
import Randomwords from './Components/randomwords'
import Stats from './Components/stats'
import Input from './Components/userinput'


render(
  <div>
      <Randomwords />
      <Input/>
      <Stats/>
  </div>,
  document.getElementById('content')
);
