/**
 * Created by Fortunat on 5/6/16.
 */

import React from "react";
import PastGames from "../components/PastGames";
import { connect } from 'react-redux'
import {
    calculateAccuracy,
    calculateWordsPerMinute,
    calculateTimeElapsed
} from '../reducers';

export const PastGamesContainer = React.createClass({

    buildStatsContainers: function() {
        return this.props.pastGames.map((game, index) => {
            const accuracy = calculateAccuracy(game);
            const wordsPerMinute = calculateWordsPerMinute(game, game.endTime);
            const timeElapsed = calculateTimeElapsed(game.startTime, game.endTime);


         
            return <PastGames
                key={index}
                accuracy={accuracy}
                wordsPerMinute={wordsPerMinute}
                timeElapsed={timeElapsed}
            />
        })
    },

    render: function() {
        return (
            <div>
                { this.buildStatsContainers() }
            </div>
        );
    }
});

const mapStateToProps = (state) => {
    
    return {
        pastGames: state.pastGames
    }
};

export default connect(mapStateToProps)(PastGamesContainer);
