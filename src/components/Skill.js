require('styles/Skill.css');

import React from 'react';
import Tool from './Tool';

class Skill extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      decript: []
    };

    this.level = ['master', 'familiar', 'grasp', 'understand'];
    this.data = props.data;
    this.itemPrefix = 'item-';
    this.init = false;
  }
  componentDidMount() {

  }
  componentWillReceiveProps(nextProps) {
    let self = this;
    if(nextProps.active && !this.init) {
      setTimeout(function() {
        self.open();
      }, 2000);
    }
  }
  open() {
    let items = this.refs;
    for(let k in items) {
      if(k.indexOf(this.itemPrefix) != -1) {
        let index = parseInt(k.split(this.itemPrefix)[1]);
        let percent = parseInt(this.data[index].percent);
        percent = percent ? percent : 0;
        let step = percent/(1000/16);
        let curr = 0;
        if(Tool.isIE6789()) {
          let timer = setInterval(function() {
            curr += step;
            if(curr >= percent) {
              curr = percent;
              clearInterval(timer);
            }
            items[k].style.cssText = 'width:'+curr+'%';
          }, 16);
        } else {
          items[k].style.cssText = 'width:'+percent+'%;transition: width 2s;-webkit-transition: width 2s;';
        }
      }
    }

    this.init = true;
  }
  getLevel(percent) {
    let per = parseInt(percent);
    if(per >= 70) {
      return 0;
    } else if(per >= 50 && per < 70) {
      return 1;
    } else if(per >=30 && per < 50) {
      return 2;
    } else if(per < 30) {
      return 3;
    }
  }
  mouseEnterHandler(index, event) {
    let decript = this.refs.skillDecript;
    console.log(event.target.offsetTop);
    decript.style.cssText = 'top:'+(event.target.offsetTop)+'px;left: '+this.data[index].percent/2+'%;';

    this.setState({
      show: true,
      decript: this.data[index].decript
    });
  }
  mouseLeaveHandler(event) {
    this.setState({
      show: false
    });
  }
  render() {
    let self = this;
    this.data.sort(function(a, b) {
      return b.percent-a.percent;
    });
    let decriptClass = Tool.classSet({
      'skill-decript': true,
      'show': this.state.show
    });
    let decript = this.state.decript;
    let decriptDom = [];
    for(let i = 0; i < decript.length; i++) {
      decriptDom.push(<li key={i}>{decript[i]}</li>);
    }
    return (
      <div className="skill">
        <div className="skill-content">
          <p className="skill-title">学而不已，阖棺乃止</p>
          <div className="skill-group">
          {
            this.data.map(function(item, index) {
              let itemClass = 'skill-item ' + self.level[self.getLevel(item.percent)];
              let refName = self.itemPrefix+index;
              return (
                <div key={index} className={itemClass}>
                  <div ref={refName}
                    onMouseEnter={self.mouseEnterHandler.bind(self, index)}
                    onMouseLeave={self.mouseLeaveHandler.bind(self)}
                  >
                    <label>{item.name}</label>
                  </div>
                </div>
              );
            })
          }
            <ul className="skill-coord">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
            <ul className={decriptClass} ref="skillDecript">
              {decriptDom}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Skill;
