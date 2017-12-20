import React from 'react';
import ReactDOM from 'react-dom';
import Css from './index.css'
import Post from './Post';

let post = {
  postTitle: "The world is mine.",
  postAutors: [
    "Someone Cool",
    "Someone Cooler",
    "The Coolest"
  ],
  postBody: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  postComments: [
    "Number one!",
    "Great post.",
    "Great work of art."
  ]
}


ReactDOM.render(<Post
  title={post.postTitle}
  authors={post.postAutors}
  body={post.postBody}
  comments={post.postComments} />,
document.getElementById('root')
);
