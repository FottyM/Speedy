var React = require('react');
var ReactDOM = require('react-dom');

module.exports = React.createClass({

        getInitialState: function() {
          return {value: 'Type semething'};
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
