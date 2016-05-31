require('styles/Career.css');

import React from 'react';
import Tool from './Tool';

class Career extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };

    this.init = false;
    this.timer;
  }
  componentDidMount() {
    let self = this;
    if(!this.timer) {
      this.timer = setInterval(function() {
        if(!self.init) {
          self.drawCareer();
        } else {
          clearInterval(self.timer);
        }
      }, 32);
    }
  }
  drawCareer() {
    let careerGroup = this.refs.careerGroup;
    let seeHeight = document.documentElement.clientHeight;
    let top = careerGroup.getBoundingClientRect().top;
    if(top >= 0 && top < seeHeight/2) this.open();
  }
  open() {
    let careerGroup = this.refs.careerGroup;
    if(Tool.isIE6789()) {
      let margin = Math.abs(parseFloat(careerGroup.currentStyle['marginTop']));
      let stepOpacity = 1/(1000/32);
      let stepMargin = margin/(1000/32);
      let currOpacity = 0;
      let currMargin = -margin;
      let timer = setInterval(function() {
        currOpacity += stepOpacity;
        currMargin += stepMargin;
        if(currOpacity >= 1 || currMargin >= 0 ) {
          currOpacity = 1;
          currMargin = 0;
          clearInterval(timer);
        }
        careerGroup.style.cssText = 'opacity: '+currOpacity+'; margin-top: '+currMargin+'px';
      }, 32);
    } else {
      careerGroup.style.cssText = 'opacity: 1; margin-top: 0;transition: all 2s;-webkit-transition: all 2s;';
    }

    this.init = true;
  }
  render() {
    let self = this;
    let items = this.props.data;
    items.sort(function(a, b) {
      return Date.parse(b.time)-Date.parse(a.time);
    });
    return (
      <div className="career">
        <div className="career-container">
          <p className="career-title">生如夏花之绚烂，死如秋叶之静美</p>
          <table className="career-group" ref="careerGroup">
            <tbody>
            {
              items.map(function(item, index) {
                return (
                  <tr key={index}>
                    <td className="career-slogan">
                      <label>{Tool.formateDate(item.time)}</label>
                      <label>{item.name}</label>
                      <span className={'logo '+'logo-'+item.logo}></span>
                    </td>
                    <td className="career-content">
                      <div>
                        <label>担任职位：</label>
                        <span>{item.job}</span>
                      </div>
                      <div>
                        <label>工作职责：</label>
                        <span>{item.duty}</span>
                      </div>
                      <div>
                        <label>工作业绩：</label>
                        <span>{item.achievement}</span>
                      </div>
                    </td>
                  </tr>
                );
              })
            }
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Career;
