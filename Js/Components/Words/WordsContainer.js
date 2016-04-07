import React, {createClass} from 'react';
import ReactDOM, {render} from 'react-dom';
import NextWord from './NextWord';


module.exports = createClass({

    propTypes: {
        words: React.PropTypes.string,
        nextWords: React.PropTypes.array

    },

    getInitialState: function() {
    return {words:"Tere",nextWords: ["Tere","bc","cd"]};
  },

    render: function() {

        return <NextWord words = {this.state.words} nextWords = {this.state.nextWords}/>

    }
});
