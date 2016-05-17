require('styles/Navbar.css');

import React from 'react';
import {Link} from 'react-router';
import Tool from './Tool';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHover: undefined,
      showDecription: false,
      show: false
    };
  }
  hover() {
    this.setState(
      {
        isHover: true,
        showDecription: true
      }
    );
  }
  noneHover() {
    this.setState(
      {
        isHover: false,
        showDecription: false
      }
    );
  }
  toggleClick() {
    this.setState(
      {
        show: !this.state.show
      }
    );
  }
  itemClick() {
    if(!this.state.show) return;

    this.setState(
      {
        show: false
      }
    );
  }
  render() {
    let self = this;
    const iconClass = Tool.classSet({
      'brand-icon': true,
      'hover': this.state.isHover,
      'none-hover': this.state.isHover != undefined && !this.state.isHover
    });
    const toggleClass = Tool.classSet({
      'navbar-toggle': true,
      'in': this.state.show
    });
    const decritionClass = Tool.classSet({
      'navbar-decription': true,
      'hover': this.state.isHover,
      'none-hover': this.state.isHover != undefined && !this.state.isHover
    });
    const collapseClass = Tool.classSet({
      'navbar-collapse': true,
      'in': this.state.show
    });
    return (
      <div className="navbar">
        <div className="navbar-container container">
          <div className="navbar-header">
            <div className="navbar-brand">
              <Link to="/"><div className={iconClass} onMouseEnter={this.hover.bind(this)} onMouseLeave={this.noneHover.bind(this)}></div></Link>
              <span className="brand-title">{this.props.title}</span>
            </div>
            <div className={toggleClass} onClick={this.toggleClick.bind(this)}>
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
            <div className={decritionClass}>
              <span>{this.state.showDecription ? this.props.decription : ''}</span>
            </div>
          </div>
          <div className={collapseClass}>
            <ul className="navbar-nav">
              {
                this.props.items.map(function(item, index) {
                  return (
                    <li key={index} onClick={self.itemClick.bind(self)}><Link to={item.path}>{item.name}</Link></li>
                  );
                })
              }
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
