import React from 'react'
import ReactDOM from 'react-dom'
import Rwg from 'random-word-generator'

module.exports = React.createClass({

    propType:{
      word: React.PropTypes.string,
      nextWord: React.PropTypes.string
    },

    getInitialState:function (){

      return {word:'',nextWord:'' }

    },

    generateRandom: function () {

      var generator = new Rwg();
      var words =  generator.generate();
      this.state.word = words;
      this.setState({word: this.state.word,nextWord: this.state.nextWord})
    },

    componentDidMount: function () {

      this.generateRandom();
      setInterval(this.generateRandom,8000);

    },

    render : function() {
      return <div>
          <h2>Next: {this.state.nextWord}</h2>
          <h1>Current: {this.state.word}</h1>
      </div>;
    }
});
