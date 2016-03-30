define(['react','react-dom'],

  (React,ReactDOM) => {

      var userInput = React.createClass({

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


      ReactDOM.render(
        React.createElement(userInput, null),
        document.getElementById('content')
      );




  });
