let Tool = new class {
  classSet(o) {
    if(typeof o !== 'object') return;

    let classString = '';
    for(let k in o) {
      if(o[k]) {
        classString += ' '+k;
      }
    }

    return classString;
  }
  isIE() {
    let ua = navigator.userAgent;

    return /msie/i.test(ua) && !window.opera;
  }
  getBrowserVendor() {
    let ua = navigator.userAgent.toLowerCase();

    const ie = /msie [\d.]+/gi;
    const firefox = /firefox\/[\d.]+/gi;
    const chrome = /chrome\/[\d.]+/gi;
    const safari = /safari\/[\d.]+/gi;

    let browser = {};

    if(ua.indexOf('msie') > 0) {
      browser.vendor = 'ie';
      browser.version = (ua.match(ie)+'').replace(/[^0-9.]/ig, '').split('.');
      browser.version = browser.version[0];
    } else if(ua.indexOf('firefox') > 0) {
      browser.vendor = 'firefox';
      browser.version = (ua.match(firefox)+'').replace(/[^0-9.]/ig, '');
    } else if(ua.indexOf('chrome') > 0) {
      browser.vendor = 'chrome';
      browser.version = (ua.match(chrome)+'').replace(/[^0-9.]/ig, '');
    } else if(ua.indexOf('safari') > 0) {
      browser.vendor = 'safari';
      browser.version = (ua.match(safari)+'').replace(/[^0-9.]/ig, '');
    } else {
      browser = undefined;
    }

    return browser;
  }
  isIE6789() {
    let browser = this.getBrowserVendor();
    if(browser && browser.vendor == 'ie') {
      if(browser.version == '6' || browser.version == '7'
          || browser.version == '8' || browser.version == '9') {
        return true;
      }
    }

    return false;
  }
}

export default Tool;
