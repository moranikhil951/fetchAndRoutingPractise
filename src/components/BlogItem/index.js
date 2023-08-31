// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const BlogItem = props => {
  const {eachItem} = props
  const {id, title, imageUrl, avatarUrl, author, topic} = eachItem
  return (
    <Link to={`/blogs/${id}`} className="nav-link">
      <div className="BlogItem-Container">
        <img className="imageUrl" alt={title} src={imageUrl} />
        <div className="info-con">
          <p className="topic">{topic}</p>
          <h1 className="title">{title}</h1>
          <div className="author-flex">
            <img className="avatarUrl" alt={`avatar ${id}`} src={avatarUrl} />
            <p className="authorName">{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
