// Write your JS code here

import './index.css'

const BlogItem = props => {
  const {blogdetails} = props
  const {title, publishedDate, description} = blogdetails
  console.log(blogdetails)

  return (
    <div className="details-container">
      <div className="title-row">
        <h1 className="title">{title}</h1>
        <p className="pargraph">{publishedDate}</p>
      </div>
      <p className="pargraph">{description}</p>
    </div>
  )
}

export default BlogItem
