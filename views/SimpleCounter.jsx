import React from 'react';

export default class SimpleCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: 0};
  }

  inc() {
    this.setState({count: this.state.count + 1})
  }

  dec() {
    this.setState({count: this.state.count - 1})
  }

  render() {
    return (
      <div>
        <h1>{ this.state.count }</h1>
        <button onClick={ () => this.inc() }>+1</button>
        <button onClick={ () => this.dec() }>-1</button>
      </div>
    );
  }
}
