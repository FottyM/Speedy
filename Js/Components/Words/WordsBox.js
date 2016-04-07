import React, {createClass} from 'react';
import ReactDOM, {render} from 'react-dom';
import NextWord from './NextWord';


module.exports = createClass({

    render:() => {

        return (<div>
            <NextWord/>
            <input type = "text" >
            </input>
            </div>)


        }
});
