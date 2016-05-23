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
    return (
      <div className="basic">
        <div className="basic-content">
          <div className="basic-icon">
            <span></span>
          </div>
          <div className="basic-info">
            <p>吴贵福</p>
            <p>web前端工程师</p>
            <div className="basic-item">
              <label>出生日期：</label>
              <span>1991年05月30号</span>
            </div>
            <div className="basic-item">
              <label>籍贯：</label>
              <span>福建省南安市</span>
            </div>
            <div className="basic-item">
              <label>电话：</label>
              <span>xxx-xxxx-xxxx</span>
            </div>
            <div className="basic-item">
              <label>邮箱：</label>
              <span>502556093@qq.com</span>
            </div>
          </div>
          <div className="basic-decript">
            <p></p>
          </div>
        </div>
      </div>
    );
  }
}

export default Basic;
