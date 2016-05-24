import React from 'react';
import Rotation from './Rotation';
import Config from '../config/config';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    let items = Config.data.home;
    return (
      <Rotation items={items}></Rotation>
    );
  }
}

export default Home;
