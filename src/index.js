import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class FeedBackApp extends Component {
  render() {
    alert(this.props.config.some);
    return (
      <div>
        Hello
      </div>
    );
  }
}

export const init = config => {
  const el = document.createElement('div'); 
  
  el.setAttribute('class', 'cleanslate');
  document.body.appendChild(el);
  ReactDOM.render(<FeedBackApp config={config} />, el);
};
