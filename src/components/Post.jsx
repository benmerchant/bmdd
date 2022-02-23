import React, { Component } from 'react';
class Post extends Component {
  render() {
    const { post } = this.props;
    const postDate = post.date;
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'Septemper',
      'October',
      'November',
      'December',
    ];
    let dateString = `${
      months[postDate.getMonth()]
    } ${postDate.getDate()}, ${postDate.getFullYear()}`;
    return (
      <div key={post.id} className='mb-3 card'>
        <h3 className='card-header'>{post.title}</h3>
        <div className='card-body'>
          <p className='card-text'>{post.body}</p>
          <p className='card-text text-muted'>{dateString} by Ben Merchant</p>
        </div>
      </div>
    );
  }
}

export default Post;
