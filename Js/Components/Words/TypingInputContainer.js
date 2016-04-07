import React, {createClass} from 'react';
import ReactDOM, {render} from 'react-dom';
import TypingInput from './TypingInput';


module.exports = createClass({

    getInitialState: function() {
    return {value: 'Hello!'};
  },
  handleChange: function(event) {
    this.setState({value: event.target.value});
  },
  render: function() {
    return (
      <input
        type="text"
        value={this.state.value}
        onChange={this.handleChange}
      />
    );
  }
});
