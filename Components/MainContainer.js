import React,{createClass} from 'react'
import ReactDOM,{render} from 'react-dom'
import Randomwords from './Randomwords'
import Stats from './Stats'
import Input from './Userinput'


var MainContainer = createClass({

    render: function () {

        return(<div>
            <Randomwords  />
            <Input/>
        </div>)

    }

});

export default MainContainer;
