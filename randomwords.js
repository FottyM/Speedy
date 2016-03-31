import React from 'react';
import ReactDOM from 'react-dom';


module.exports = React.createClass({

    propType:{
      word: React.PropTypes.string
    },

    getInitialState:function (){

      return {word:''}

    },

    reloadWord: function () {
      var words = ['For', 'God' ,'so' ,"loved" ,"the" ,"world" ,"that" ,"he" ,"gave" ,"his","one " , "and" ,"only" ,"Son,", "that" ,"whoever" ,"believes" ,"in him" ,"shall", "not" ,"perish", "but" ,"have" ,"eternal", "life."];
      this.state.word = words[Math.floor(Math.random()*words.length)];
      this.setState({word: this.state.word})
    },

    componentDidMount: function () {

      this.reloadWord();
      setInterval(this.reloadWord,2000);

    },

    render : function() {
      return <p>{this.state.word}</p>;
    }
});
