// Write your JS code here
import './index.css'
const BlogItem = props => {
  const {blogDetails} = props
  const {title, description, publishedDate} = blogDetails
  return (
    <li className="listItem">
      <div className="titleContainer">
        <h1 className="title">{title}</h1>
        <p className="date">{publishedDate}</p>
      </div>
      <p className="decs">{description}</p>
    </li>
  )
}
export default BlogItem
