import React, { Component } from 'react';
// import './App.css';

class Author extends Component {
  render() {
    return (
      <div>
        {
            /* Create an Author component that renders "Written by ", followed by an author.
          When I do that it prints Written by: in front of
          every writer and plus an extra one on the top)*/
        }
        <div>{this.props.author}</div>
      </div>
    )
  }
}


export default Author;
