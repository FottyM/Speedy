import React,{createClass} from 'react'
import ReactDOM,{render} from 'react-dom'
import Randomwords from './Randomwords'
import Stats from './Stats'
import Userinput from './Userinput'


module.exports = createClass({

    getInitialState: function() {
        return {title:"Welcome"};
      },

    changeTitle:function (title) {
        this.setState({title});
    },

    render:function () {
        return(<div>
            <Randomwords/>
            <Userinput changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
        </div>)
    }


});
