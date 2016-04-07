import React,{createClass} from 'react';
import ReactDOM,{render} from 'react-dom';
import WordsBox  from './Components/Words/WordsBox';


var MotherBox = createClass({

render: function (){


    return (<div>

        <div>
            <WordsBox/>
            <h2> Score: </h2>
            <h3> Stats: </h3>
            <h3> Speed: </h3>
        </div>



    </div>);
}
});

render(<MotherBox/>,document.getElementById('content'));
