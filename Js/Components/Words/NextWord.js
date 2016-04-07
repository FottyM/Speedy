import React,{createClass,PropTypes} from 'react';
import ReactDOM,{render} from 'react-dom';
import  randomWords from 'random-words';

module.exports = createClass({

    getInitialState: function() {
    return {wez:'', zie:this.props.nextWords[0]};
  },

    componentDidMount: function () {

        var words = this.props.words;
        var nextWords = this.props.nextWords;
        this.setState({words , nextWords});
    },

    render:function() {

        this.state.wez = (this.state.words == this.state.zie ? "ok" : "not Ok")
        // debugger
        // console.log(wez)
        return( <div>

            <h2> {this.props.nextWords}</h2>
            <h1>{this.props.words} </h1>
            {this.state.wez}
        </div>

        )

    }
});
