import { INCREMENT_COUNTER, DECREMENT_COUNTER, ADD_COUNTER } from '../constants/ActionTypes';

export const INITIAL_STATE = {
  value: 0,
  warning: false
}
const update = (state, mutations) =>
  Object.assign({}, state, mutations)

export default function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case INCREMENT_COUNTER:
            state = update(state, {value : state.value + 1});
            break;
        case DECREMENT_COUNTER:
            state = update(state, {value : state.value - 1});
            break;
    }
    state  = update(state, { warning: state.value > 5 })
    return state   
}