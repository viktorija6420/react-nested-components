import React, { Component } from 'react';
// import './App.css';

class Comment extends Component {
  render() {
    return (
      <div>
        <div>{this.props.body}</div>
      </div>
    )
  }
}

export default Comment
