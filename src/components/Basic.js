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
    let items = this.refs;
    for(let k in items) {
      if(k.indexOf(this.playPrefix) != -1) {
        if(Tool.isIE6789()) {
          let step = 1/(1000/32);
          let curr = 0;
          let timer = setInterval(function() {
            curr += step;
            if(curr >= 1) {
              curr = 1;
              clearInterval(timer);
            }
            items[k].style.cssText = 'opacity: '+curr;
          }, 32);
        } else {
          items[k].style.cssText = 'opacity: 1;transition: opacity 2s;-webkit-transition: opacity 2s;';
        }
      }
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
            <p ref={this.playPrefix+'name'}>{data.name}</p>
            <p ref={this.playPrefix+'job'}>{data.job}</p>
            {
              items.map(function(item, index) {
                return (
                  <div key={index} className="basic-item">
                    <label ref={self.playPrefix+'label-'+index}>{item.title}</label>
                    <span ref={self.playPrefix+'span-'+index}>{item.value}</span>
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
