define(["react", "react-dom"],
  (React, ReactDOM) => {

  var comp = React.createClass({

      render : function() {

        var words = ['For', 'God' ,'so' ,"loved" ,"the" ,"world" ,"that" ,"he" ,"gave" ,"his","one " , "and" ,"only" ,"Son,", "that" ,"whoever" ,"believes" ,"in him" ,"shall", "not" ,"perish", "but" ,"have" ,"eternal", "life."];
        var word = words[Math.floor(Math.random()*words.length)];

        return <p>{word}</p>;
      }

  });

  ReactDOM.render(
    React.createElement(comp, null),
    document.getElementById('content')
  );
});
