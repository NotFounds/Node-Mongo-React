import React from 'react';
import { connect } from 'react-redux';

import { increment, fetchMessages } from './actions'

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  handleClick: () => { dispatch(increment()); },
  fetchMessages: () => { dispatch(fetchMessages()); }
});

class App extends React.Component {
  componentDidMount() {
    this.props.fetchMessages();
  }

  render() {
    return (
      <div>
        <h3>Messages</h3>
        <ul>
          {this.props.messages.map(x => <li key={x.text}>{x.text}</li>)}
        </ul>
        <h3>Incriment</h3>
        <p>{this.props.value}</p>
        <button onClick={() => this.props.handleClick()}>
          Push
        </button>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
