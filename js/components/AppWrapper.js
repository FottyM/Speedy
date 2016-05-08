/**
 * Created by Fortunat on 5/6/16.
 */

import React from "react";
import GlobalKeys from '../containers/GlobalKeys'
import Header from './Header'

export default (props) => {
    return(
        <div className="commentApp">
            <Header/>
            <GlobalKeys />
            {props.children}
        </div>
    )
}