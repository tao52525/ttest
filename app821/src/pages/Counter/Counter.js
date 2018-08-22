import React from 'react'
import {increment, decrement, reset} from '../../redux/actions/counter.js';

import {connect} from 'react-redux'

class Counter extends React.Component {
  render() {
    const dispatch = this.props.dispatch
    return (
      <div>
        <div>计数: {this.props.counter.count}, 总数：{this.props.counter.total}</div>
        <button onClick={this.props.dispatch.increment}>+</button>
        <button onClick={dispatch.decrement}>-</button>
        <button onClick={dispatch.reset}>O</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    dispatch: {
      increment: () => {
        dispatch(increment())
      },
      decrement: () => {
        dispatch(decrement())
      },
      reset: () => {
        dispatch(reset())
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
