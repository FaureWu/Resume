import React from 'react';
import Rotation from './Rotation';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    let items =[
      {
        skin: '',
        component: {
          type: 'basic'
        }
      },
      {
        skin: 'blue',
        component: {
          type: ''
        }
      },
      {
        skin: 'yellow',
        component: {
          type: ''
        }
      },
      {
        skin: 'green',
        component: {
          type: ''
        }
      },
      {
        skin: 'pink',
        component: {
          type: ''
        }
      },
      {
        skin: 'red',
        component: {
          type: ''
        }
      },
      {
        skin: 'white',
        component: {
          type: ''
        }
      }
    ];
    return (
      <Rotation items={items}></Rotation>
    );
  }
}

export default Home;
