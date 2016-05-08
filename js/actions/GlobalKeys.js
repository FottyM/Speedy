/**
 * Created by fotty on 5/6/16.
 */
import {setCurrentInput} from './index'
export const keyPressed = (key) => {
    return (dispatch, getState) => {
     
        dispatch(setCurrentInput(key));
    }
};
