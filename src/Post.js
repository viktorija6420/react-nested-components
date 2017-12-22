import React, { Component } from 'react';
import './App.css';
import Comment from './Comment.js';
import Author from './Author.js';


class Post extends Component {
  constructor (props){
    super()
    this.state = {
      body: props.body
    }
  }

  changeBody(e){
    let newBody = prompt("Put some text for the body")
    this.setState({
      body: newBody
    })
  }

  render() {
    let allComments = [
      <Comment body={this.props.comments[0]} />,
      <Comment body={this.props.comments[1]} />,
      <Comment body={this.props.comments[2]} />
    ]

    let allAuthors = <Author author={
      this.props.authors.map((author) =>
       <li key={author.id}>
        Written by: {author}
       </li>
      )
    }/>

    return (
      <div>
        <h1>{this.props.title}</h1>
        <h4><Author author={allAuthors}/></h4>,
        {this.state.body}
        <div><button onClick={(e) => this.changeBody(e)}>Change Body!</button></div>

        <h3>Comments:</h3><Comment body={allComments}/>
      </div>
    );
  }
}

export default Post;
