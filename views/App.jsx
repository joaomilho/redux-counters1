import React from 'react';
import { connect } from 'react-redux';
import actions from '../store/actions';
import { bindActionCreators } from 'redux';
import SimpleCounter from './SimpleCounter';
import ReduxCounter from './ReduxCounter';

export default class App extends React.Component {

  render() {
    return (
      <div>
        <SimpleCounter />
        <ReduxCounter />
      </div>
    );
  }
}
