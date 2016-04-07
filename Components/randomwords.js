import React from 'react'
import ReactDOM from 'react-dom'
import Rwg from 'random-word-generator'

module.exports = React.createClass({

    getInitialState:function (){

      return {word:this.props.word,nextWord:'' }

    },

    render : function() {
        console.log(this.state.word + " is the state of word")
        console.log(this.props + "props in random")
      return <div>
          <h1>Current: {this.state.word}</h1>
      </div>;
    }
});
