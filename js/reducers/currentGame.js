import R from 'ramda';

const words = [];
const startTime = undefined;
const currentInput = ''

const initialState = {
  words: words,
  startTime: undefined,
  currentInput: '', currentInputBuffer:[],
  pastInput: [],
  wordFetchInProgress: false
}

export const currentGame = (state = initialState, action) => {
  switch (action.type) {
    case 'START_WORD_FETCH':
      return R.merge(state, { wordFetchInProgress: true } );
    case 'STOP_WORD_FETCH':
      return R.merge(state, { wordFetchInProgress: false } );
    case 'SET_CURRENT_INPUT':
      let currentInput = action.payload.currentInput;

        let currentInputBuffer = R.concat(state.currentInputBuffer,currentInput);
         currentInput = R.join('',currentInputBuffer)


      if (currentInput.trim().length > 0 && currentInput[currentInput.length - 1] === " "){
        const newPastInput = R.concat(state.pastInput, [currentInput.trim()]);
        return R.merge(state,  {currentInput: "", pastInput: newPastInput ,currentInputBuffer:[]});
      }else{
        return R.merge(state, {currentInput: currentInput ,currentInputBuffer:currentInputBuffer});
      }
    case 'START_GAME':
      return R.merge(state, {
        startTime: action.payload.startTime,
        currentInput: '',
        pastInput: [],
        words: action.payload.words
      });
    case 'END_GAME':
      return R.merge(state, { startTime: undefined, currentInput: '' });
    default:
      return state;
  }
}

