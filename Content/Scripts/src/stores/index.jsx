import counterReducer, { INITIAL_STATE as COUNTER_INITIAL_STATE } from './counter'
import { INCREMENT_COUNTER, DECREMENT_COUNTER, ADD_COUNTER, DEL_COUNTER } from '../constants/ActionTypes';
import _ from 'lodash'

const INITIAL_STATE = _.range(5).map(t => COUNTER_INITIAL_STATE)

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case INCREMENT_COUNTER:
        case DECREMENT_COUNTER:
            return [
            ...state.slice(0, action.index),
            counterReducer(state[action.index], action),
            ...state.slice(action.index + 1)
            ]
        case ADD_COUNTER:
            state = [...state, COUNTER_INITIAL_STATE]    
            break;
        case DEL_COUNTER:
            var newData = [...state]
            newData.splice(-1, 1)
            state = newData
            break;
    }
    return state
}

export default reducer