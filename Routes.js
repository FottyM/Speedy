/**
 * Created by Fortunat on 5/6/16.
 */
import React from "react";
import { Router, Route, IndexRoute } from 'react-router';
import About from './js/components/About';
import PastGamesContainer from './js/containers/PastGamesContainer';
import Game from './js/components/Game';
import AppWrapper from './js/components/AppWrapper';


export default (history) => (_) => {
    return(
        <Router history={history}>
            <Route path="/" component = {AppWrapper}>
                <IndexRoute component = {Game} />
                <Route path = "/about" component={About} />
                <Route path = "/play" component ={Game}/>
                <Route path = "/pastGames" component={PastGamesContainer} />
            </Route>
        </Router>
    )
}
