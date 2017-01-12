import { INCREMENT_COUNTER, DECREMENT_COUNTER, ADD_COUNTER, DEL_COUNTER } from '../constants/ActionTypes';

export function increment() {
    return {
        type: INCREMENT_COUNTER
    };
}

export function decrement() {
    return {
        type: DECREMENT_COUNTER
    };
}

export function addCounter() {
    return {
        type: ADD_COUNTER
    }
}

export function deleteCounter() {
    return {
        type: DEL_COUNTER
    }
}