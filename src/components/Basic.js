require('styles/Basic.css');

import React from 'react';
import Tool from './Tool';

class Basic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.timer;
    this.init = false;
    this.playPrefix = 'play-';
  }
  componentDidMount() {
    let self = this;
    if(!this.timer) {
      this.timer = setInterval(function() {
        if(!self.init) {
          self.drawBasic();
        } else {
          clearInterval(self.timer);
        }
      }, 32);
    }
  }
  drawBasic() {
    let basicInfo = this.refs.basicInfo;
    let seeHeight = document.documentElement.clientHeight;
    let top = basicInfo.getBoundingClientRect().top;
    if(top >= 0 && top < seeHeight/2) this.open();
  }
  open() {
    let basicInfo = this.refs.basicInfo;
    if(Tool.isIE6789()) {
      let step = 1/(1000/32);
      let curr = 0;
      let timer = setInterval(function() {
        curr += step;
        if(curr >= 1) {
          curr = 1;
          clearInterval(timer);
        }
        basicInfo.style.cssText = 'opacity: '+curr;
      }, 32);
    } else {
      basicInfo.style.cssText = 'opacity: 1;transition: opacity 2s;-webkit-transition: opacity 2s;';
    }

    let basicIcon = this.refs.basicIcon;
    if(Tool.isIE6789()) {
      basicIcon.style.cssText = 'border-width: 0';
    } else {
      basicIcon.style.cssText = 'border-width: 0;transition: border-width 2s;-webkit-transition: border-width 2s;';
    }

    this.init = true;
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
        <div className="basic-container">
          <div className="basic-icon">
            <span ref="basicIcon"></span>
          </div>
          <div className="basic-info" ref="basicInfo">
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
