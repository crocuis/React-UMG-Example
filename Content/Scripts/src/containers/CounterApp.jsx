import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import Counter from '../components/Counter';
import AddCounter from '../components/AddCounter'
import DelCounter from '../components/DelCounter'
import bindIndexToActionCreators from '../stores/bindIndexToActionCreators'
import * as CounterActions from '../actions/CounterActions';
import _ from "lodash";

const counterDispatchProperties =
  index =>
    dispatch => bindActionCreators(
        bindIndexToActionCreators(CounterActions, index),
      dispatch)

const mapStateToProps = state => ({
  counters: state
})

const mapDispatchToProps = dispatch => ({
    addCounter() {
        dispatch(CounterActions.addCounter())
    },
    delCounter() {
        dispatch(CounterActions.deleteCounter())        
    },
    dispatch
})

class CounterApp extends Component {
    render() {
        const { counters, dispatch, addCounter, delCounter } = this.props;
        return (
            <div>
                <span>
                    <AddCounter addCounter={addCounter}/>
                    <DelCounter delCounter={delCounter}/>
                </span>
                <uWrapBox>
                {
                    counters.map((c, index) =>
                        <Counter key={index} counter={c.value}
                            {...counterDispatchProperties(index)(dispatch)} /> 
                    )
                }
                </uWrapBox>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterApp)