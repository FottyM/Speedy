import React,{createClass,PropTypes} from 'react';
import ReactDOM,{render} from 'react-dom';
import  randomWords from 'random-words';

module.exports = createClass({

    propType:{
      word: PropTypes.array
    },

    getInitialState:function (){

      return {word:[] }

    },

    generateRandom: function () {

      var words =  randomWords();
      this.state.word = words;
      this.setState({word: this.state.word})
    },

    componentDidMount: function () {

      this.generateRandom();
      setInterval(this.generateRandom,8000);

    },

    render : function() {
      return <div>
          <h1>{this.state.word}</h1>
      </div>;
    }
});
