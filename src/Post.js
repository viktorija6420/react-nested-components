import React, { Component } from 'react';
import './App.css';
import Comment from './Comment.js';
import Author from './Author.js';


class Post extends Component {
  render() {
    let allComments = [
      <Comment body={this.props.comments[0]} />,
      <Comment body={this.props.comments[1]} />,
      <Comment body={this.props.comments[2]} />
    ]

    let allAuthors = [
      <Author body={this.props.authors[0]} />,
      <Author body={this.props.authors[1]} />,
      <Author body={this.props.authors[2]} />
    ]
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h4><Author body={allAuthors}/></h4>,
        {this.props.body}
        <h3>Comments:</h3><Comment body={allComments}/>
      </div>
    );
  }
}

export default Post;
