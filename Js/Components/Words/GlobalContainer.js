import React,{createClass,PropTypes} from 'react';
import ReactDOM,{render} from 'react-dom';
import  randomWords from 'random-words';
import TypingInputContainer from './TypingInputContainer'
import WordsContainer  from './WordsContainer'


module.exports = createClass({


    render: function() {

        return (<div>
            <WordsContainer/>
            <TypingInputContainer/>

        </div>)
    }
});
