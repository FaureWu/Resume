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
  getVendorPrefix() {
    var body = document.body || document.documentElement;
    var style = body.style;

    var transition = 'transition';
    var vendor = ['Moz', 'webkit', 'ms', 'O', 'Khtml'];

    transition = transition.charAt(0) + transition.substr(1);

    let i = 0;
    while(i < vendor.length) {
      if(typeof style[vendor[i] + transition] === 'string') {
        return vendor[i];
      }

      i++;
    }

    return undefined;
  }
}

export default Tool;
