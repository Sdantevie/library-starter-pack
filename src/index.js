import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './cleanslate.css';
import './feedback.css';
import anime from 'animejs';

class FeedBackCTA extends Component {
  render() {
    let ctaStyle = {
      padding: 10,
      backgroundColor: 'red',
      borderTopLeftRadius: 10,
      color: 'white',
      cursor: 'pointer'
    };

    const { onClickHandler } = this.props;

    return (
      <div onClick={() => onClickHandler()} style={ctaStyle}>
        <span>Feedback</span>
      </div>
    );
  }
}

class FeedBackInteraction extends Component {
  render() {
    const questionArray = [
      'Do you like our site',
      'What\'s your impression of our site?',
      'What do you think?'
    ];

    let style = {
      width: 300,
      height: 300,
      backgroundColor: '#00FFFF',
      border: '2px solid black',
      borderRadius: '20px',
      marginBottom: 10
    };

    return (
      <div style={style}>
        <span>{questionArray[1]}</span>
      </div>
    );
  }
}

class FeedBackApp extends Component {
  constructor(props) {
    super(props);
    this.openHandler = this.openHandler.bind(this);

  }

  openHandler() {
    alert('hello');
  }

  render() {
    return (
      <div >
        {/* <FeedBackCTA onClickHandler = {this.openHandler}/> */}
        <FeedBackInteraction />
      </div>
    );
  }
}

export const init = config => {
  const el = document.createElement('div');

  el.setAttribute('class', 'container');
  document.body.appendChild(el);
  ReactDOM.render(<FeedBackApp config={config} />, el);
};
