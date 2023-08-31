// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

class BlogItemDetails extends Component {
  state = {dataBlog: {}, isLoading: true}

  componentDidMount = () => {
    this.blogDetailsDit()
  }

  blogDetailsDit = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    const updatedData = {
      imageUrl: data.image_url,
      title: data.title,
      author: data.author,
      avatarUrl: data.avatar_url,
      content: data.content,
      topic: data.topic,
    }
    this.setState({dataBlog: updatedData, isLoading: false})
  }

  render() {
    const {dataBlog, isLoading} = this.state

    const {id, title, imageUrl, content, avatarUrl, author} = dataBlog
    return isLoading ? (
      <div data-testid="loader">
        <Loader
          type="TailSpin"
          color="#00BFFF"
          height={50}
          width={50}
          data-testid="loader"
        />
      </div>
    ) : (
      <div className="total-con">
        <h1 className="title-items">{title}</h1>
        <div className="BlogItemDetails">
          <div className="flex-con">
            <img alt={`item ${id}`} src={avatarUrl} className="avatar-item" />
            <p>{author}</p>
          </div>
          <div className="about-cont">
            <img src={imageUrl} className="imageItems" alt={title} />
            <p className="para">{content}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default BlogItemDetails
