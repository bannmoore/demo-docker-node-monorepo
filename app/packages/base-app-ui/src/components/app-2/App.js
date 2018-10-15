import React, { Component } from 'react';
import message from '../../../../shared-module-1';

class App2 extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  componentDidMount() {
    fetch('/app-2-api/ping').then(res => {
      res.text().then(text => this.setState({ text }));
    });
    fetch('/app-2-api/message').then(res => {
      res.text().then(message => this.setState({ message }));
    });
  }

  render() {
    return (
      <div>
        API status: {this.state.text} <br/>
        Shared library: {message} <br/>
        Message: {this.state.message}
      </div>
    );
  }
}

export default App2;
