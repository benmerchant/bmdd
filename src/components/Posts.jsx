import React, { Component } from 'react';
class Posts extends Component {
  render() {
    const { posts } = this.props;
    return (
      <div>
        {posts.map((post) => (
          <div key={post.id} className='mb-2'>
            <h2 className='blogTitle px-3'>{post.title}</h2>
            {post.body}
          </div>
        ))}
      </div>
    );
  }
}

export default Posts;
