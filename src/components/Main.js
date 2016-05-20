require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import Navbar from './Navbar';
import Config from '../config/config';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div>
        <Navbar title="Resume" decription="Faure Wu" items={Config.items}></Navbar>
        {this.props.children}
      </div>
    );
  }
}

App.defaultProps = {

};

export default App;
