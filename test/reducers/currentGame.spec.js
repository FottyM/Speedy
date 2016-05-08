import { currentGame }from '../../js/reducers/CurrentGame'
import R from 'ramda';
import sinom from 'sinon';


describe('currentGame', () => {
  context("START_WORD_FETCH", () => {
    it("sets wordFetchInProgress to true", () => {
      const result = currentGame({}, {
        type: 'START_WORD_FETCH'
      });
      expect(result.wordFetchInProgress).to.eq(true);
    })
  });

  context("STOP_WORD_FETCH", () => {
    it("sets wordFetchInProgress to false", () => {
      const result = currentGame({}, {
        type: 'STOP_WORD_FETCH'
      });
      expect(result.wordFetchInProgress).to.eq(false);
    })
  });

  

  context("START_GAME", () => {
    it("sets the new game attributes", () => {
      const result = currentGame({}, {
        type: 'START_GAME',
        payload: {
          startTime: "now",
          words: ["some", "words"]
        }
      });
      expect(result.startTime).to.eq("now");
      expect(result.currentInput).to.eq('');
      expect(result.pastInput).to.deep.eq([]);
      expect(result.words).to.deep.eq(["some", "words"]);
    })
  });

  context("END_GAME", () => {
    it("clears start time and current input", () => {
      const result = currentGame({}, {
        type: 'END_GAME'
      });
      expect(result.startTime).to.eq(undefined);
      expect(result.currentInput).to.eq('');
    })
  });
});

