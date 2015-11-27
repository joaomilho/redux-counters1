import React from 'react';
import { connect } from 'react-redux';
import actions from '../store/actions';
import { bindActionCreators } from 'redux'

export default class ReduxCounter extends React.Component {
  render() {
    return (
      <div>
        <h1>{ this.props.count }</h1>
        <button onClick={ this.props.inc }>+1</button>
        <button onClick={ this.props.dec }>-1</button>
      </div>
    );
  }
}

export default connect(
  state => state,
  dispatch => bindActionCreators(actions, dispatch)
)(ReduxCounter);

