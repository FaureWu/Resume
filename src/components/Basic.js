require('styles/Basic.css');

import React from 'react';
import Tool from './Tool';

class Basic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    let self = this;
    let data = this.props.data;
    let items = [
      {title: '出生日期：', value: data.birthday},
      {title: '籍贯：', value: data.birthplace},
      {title: '工作地点：', value: data.workplace},
      {title: '电话：', value: data.tel},
      {title: '邮箱：', value: data.email}
    ];
    return (
      <div className="basic">
        <div className="basic-content">
          <div className="basic-icon">
            <span></span>
          </div>
          <div className="basic-info">
            <p>{data.name}</p>
            <p>{data.job}</p>
            {
              items.map(function(item, index) {
                return (
                  <div key={index} className="basic-item">
                    <label>{item.title}</label>
                    <span>{item.value}</span>
                  </div>
                );
              })
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Basic;
