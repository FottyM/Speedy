import React from 'react';
import ReactDOM from'react-dom';



module.exports = React.createClass({

        propType:{
          value: React.PropTypes.string
          },

        getInitialState: function() {
          return {value: 'Type semething'};
          },

          handleChange: function(event) {
          this.state.value = event.target.value;
          this.setState({value: event.target.value});
          this.props.updatemade(this.state.value);
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
