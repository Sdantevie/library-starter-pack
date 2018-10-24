import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './cleanslate.css';

class FeedBackApp extends Component {
  render() {
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
