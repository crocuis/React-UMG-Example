
import React, { Component } from 'react';
import CounterApp from './CounterApp';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import stores from '../stores';

const store = createStore(stores);
export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <CounterApp/>
            </Provider>
        );
    }
}