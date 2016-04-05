import React,{createClass} from 'react'
import ReactDOM,{render} from 'react-dom'
import Randomwords from './Components/randomwords'
import Stats from './Components/stats'
import Input from './Components/userinput'


var MainContainer = createClass({

    render: function () {

        return (<div>
            <Randomwords />
            <Input/>
            <Stats/>
        </div>);

    }
});


render(
  <div>
      <MainContainer/>
  </div>,
  document.getElementById('content')
);
