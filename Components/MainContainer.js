import React,{createClass} from 'react'
import ReactDOM,{render} from 'react-dom'
import Randomwords from './Randomwords'
import Stats from './Stats'
import Userinput from './Userinput'
import Rwg from 'random-word-generator'


module.exports = createClass({

    getInitialState: function() {
        return {title:"Welcome", word:''};
      },

    changeTitle:function (title) {
        this.setState({title});
    },

    generateRandom: function () {

      var generator = new Rwg();
      var words =  generator.generate();
      this.state.word = words;
      this.setState({word: this.state.word})//,nextWord: this.state.nextWord})
    },
    componentDidMount: function () {

      this.generateRandom();
      setInterval(this.generateRandom,8000);

    },
    render:function () {

        var mat = this.props.word == this.props.title ? "match":" dont match";
        return(<div>
            <Randomwords word = {this.state.word}/>
            <Userinput changeTitle={this.changeTitle} title={this.state.title} word = {this.props.word} x = {this.props.wolvy}/>
            <h2>{mat}</h2>
        </div>)
    }


});
