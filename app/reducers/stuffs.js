import createReducer from '../lib/createReducer'
import * as types from '../actions/types'

export const searchedStuffs = createReducer({}, {
    
});

export const stuffCount = createReducer(0, {
    [types.ADD_STUFF](state, action) {
        return state + 1;
    }
});