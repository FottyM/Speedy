import React,{createClass} from 'react'

var Title = createClass({

    render: function(){
        
        return (<h1>{this.props.title}</h1>)
    }
});


export default Title;
