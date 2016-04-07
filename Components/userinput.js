import React from 'react'
import ReactDOM from 'react-dom'
import Title from './Title'

module.exports = React.createClass({

    handleChange:function (event) {
        const title = event.target.value;
        this.props.changeTitle(title);

    },

    render:function () {
    return(<div>
        <Title title = {this.props.title}/>
        <input onChange = {this.handleChange} value = {this.props.title}/>
    </div>);
    }
});
