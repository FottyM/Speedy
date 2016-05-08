/**
 * Created by fotty on 5/6/16.
 */


import React from "react";
import KeyPressListener from './KeyPressListener'

const GlobalKeys = (props) => {
    return (
        <div>
            <div>{props.keys}</div>
            <KeyPressListener handleKeyPress={props.handleKeyPress} />
        </div>
    )
};

export default GlobalKeys;
