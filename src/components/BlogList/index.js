// Write your JS code here

import './index.css'

import BlogItem from '../BlogItem'

const BlogList = props => {
  const {blog} = props

  return (
    <ul className="blog-items">
      <BlogItem blogdetails={blog} />
    </ul>
  )
}

export default BlogList
