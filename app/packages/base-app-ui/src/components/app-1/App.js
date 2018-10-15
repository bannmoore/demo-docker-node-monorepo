import React, { Component } from 'react';

class App1 extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '', message: '' };
  }

  componentDidMount() {
    fetch('/app-1-api/ping').then(res => {
      res.text().then(text => this.setState({ text }));
    });
    fetch('/app-1-api/message').then(res => {
      res.text().then(message => this.setState({ message }));
    });
  }

  render() {
    return (
      <div>
        API status: {this.state.text} <br />
        Message: {this.state.message}
      </div>
    );
  }
}

export default App1;
