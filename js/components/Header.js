/**
 * Created by Fortunat on 5/6/16.
 */

import React from "react";
import { Link } from 'react-router';

const LinkToPlay = (_) => <Link to="/">Play</Link>;
const LinkToPastGames = (_) => <Link to="/pastGames">Past Games</Link>;
const LinkToAbout = (_) => <Link to="/about">About </Link>;



const Header = (props) => {
    return(
        <div className="commentApp">
            <h1>Speed Typer</h1>
            <div> <LinkToPlay/> </div>
            <div> <LinkToPastGames/></div>
            <div> <LinkToAbout/></div>
         
        </div>
    )
};


export { Header as default };