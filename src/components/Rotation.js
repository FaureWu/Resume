require('styles/Rotation.css');

import React from 'react';
import Tool from './Tool';
import Screen from './Screen';

class Rotation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currIndex: 0
    };

    this.itemNum = props.items.length;
    this.height = document.body.clientHeight;
    this.timer = undefined;

    this.dragObj = {
      begin: false
    }
  }
  componentDidUpdate(oldProps, oldState) {
    //注意：该函数中不能直接或间接调用this.setState(),否则会无限递归
    this.scroll();
  }
  scroll() {
    let self = this;
    if(this.timer) {
      clearInterval(this.timer);
      this.timer = undefined;
    }

    let rotationContent = this.refs.rotationContent;
    const y = this.height*this.state.currIndex;
    const time = 2;
    if(Tool.isIE6789()) {
      const oldY = Math.abs(parseFloat(rotationContent.style.top) ? parseFloat(rotationContent.style.top) : 0);
      let step = (y-oldY)/(time/2*1000/16), tmp = oldY;

      this.timer = setInterval(function() {
        tmp += step;
        if(Math.abs(tmp-y) < Math.abs(step)) {
          tmp = y;
          clearInterval(self.timer);
          self.timer = undefined;
        }
        rotationContent.style.cssText = 'top:-'+tmp+'px';
      }, 16);
    } else {
      rotationContent.style.cssText = 'top:'+(y ? -y+'px' : '0')+';transition: top '+time+'s;-webkit-transition: top '+time+'s;';
    }
  }
  up() {
    let index = this.state.currIndex-1;
    if(index <= 0) {
      index = 0;
    }
    this.setState({
      currIndex: index
    });
  }
  down() {
    let index = this.state.currIndex+1;
    if(index >= this.itemNum) {
      index = this.itemNum-1;
    }
    this.setState({
      currIndex: index
    });
  }
  showScreenClickHandler(index) {
    this.setState({
      currIndex: index
    });
  }
  showScreenWheelHandler(event) {
    if(event.deltaY < 0) {
      //向上滚动
      this.up();
    } else if(event.deltaY > 0) {
      //向下滚动
      this.down();
    }
  }
  dragStart(x, y) {
    this.dragObj.begin = true;
    this.dragObj.currPos = {};
    this.dragObj.currPos.x = x;
    this.dragObj.currPos.y = y;
  }
  drag(x, y) {
    if(!this.dragObj.begin) return;

    if(!this.dragObj.prevPos) {
      this.dragObj.prevPos = {};
    }

    this.dragObj.prevPos.x = this.dragObj.currPos.x;
    this.dragObj.prevPos.y = this.dragObj.currPos.y;
    this.dragObj.currPos.x = x;
    this.dragObj.currPos.y = y;

    let rotationContent = this.refs.rotationContent;
    const top = Math.abs(parseFloat(rotationContent.style.top) ? parseFloat(rotationContent.style.top) : 0);
    let step = Math.abs(this.dragObj.currPos.y-this.dragObj.prevPos.y);
    let tmp;
    if(this.dragObj.currPos.y >= this.dragObj.prevPos.y) {
      //向下拖拽, up
      tmp = top-step;
      if(tmp < 0) tmp = 0;
    } else {
      //向上拖拽, down
      tmp = top+step;
      if(tmp > this.height*(this.itemNum-1)) tmp = this.height*(this.itemNum-1);
    }

    rotationContent.style.cssText = 'top:-'+tmp+'px';
  }
  dragEnd() {
    let rotationContent = this.refs.rotationContent;
    const top = Math.abs(parseFloat(rotationContent.style.top) ? parseFloat(rotationContent.style.top) : 0);
    const y = this.height*this.state.currIndex;

    if(top > y) {
      this.setState({
        currIndex: this.state.currIndex+1
      });
    } else if(top < y) {
      this.setState({
        currIndex: this.state.currIndex-1
      });
    }

    this.dragObj.begin = false;
    if(this.dragObj.prePos) delete this.dragObj.prevPos;
    if(this.dragObj.currPos) delete this.dragObj.currPos;
  }
  showScreenMouseDownHandler(event) {
    this.dragStart(event.clientX, event.clientY);
  }
  showScreenMouseMoveHandler(event) {
    this.drag(event.clientX, event.clientY);
  }
  showScreenMouseUpHandler(event) {
    this.dragEnd();
  }
  showScreenTouchStartHandler(event) {
    this.dragStart(event.targetTouches[0].clientX, event.targetTouches[0].clientY);
  }
  showScreenTouchMoveHandler(event) {
    this.drag(event.touches[0].clientX, event.touches[0].clientY);
  }
  showScreenTouchEndHandler(event) {
    this.dragEnd(event.changedTouches[0].clientX, event.changedTouches[0].clientY);
  }
  render() {
    let self = this;
    let items = this.props.items;
    return (
      <div className="rotation">
        <div className="rotation-content" ref="rotationContent"
              onWheel={this.showScreenWheelHandler.bind(this)}
              onTouchStart={this.showScreenTouchStartHandler.bind(this)}
              onTouchMove={this.showScreenTouchMoveHandler.bind(this)}
              onTouchEnd={this.showScreenTouchEndHandler.bind(this)}
              onMouseDown={this.showScreenMouseDownHandler.bind(this)}
              onMouseMove={this.showScreenMouseMoveHandler.bind(this)}
              onMouseUp={this.showScreenMouseUpHandler.bind(this)}
        >
          <ul className="rotation-icon">
            {
              items.map(function(screen, index) {
                let activeClass = Tool.classSet({
                  active: index == self.state.currIndex
                });
                return (<li onClick={self.showScreenClickHandler.bind(self, index)}  className={activeClass} key={index}></li>);
              })
            }
          </ul>
          <div className="rotation-group">
          {
            items.map(function(screen, index) {
              return (<Screen key={index} skin={screen.skin} height={self.height} component={screen.component}></Screen>);
            })
          }
          </div>
        </div>
      </div>
    );
  }
}

export default Rotation;
