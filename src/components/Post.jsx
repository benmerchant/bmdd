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
    let dateString = months[postDate.getMonth()];
    dateString += ' ' + postDate.getDate();
    dateString += `, ${postDate.getFullYear()}`;
    return (
      <div key={post.id} className='mb-2'>
        <h2 className='blogTitle px-3'>{post.title}</h2>
        <p>{post.body}</p>
        {dateString} by Ben Merchant
      </div>
    );
  }
}

export default Post;
