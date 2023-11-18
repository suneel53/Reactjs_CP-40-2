// Write your code here
import './index.css'

const MovieItem = props => {
  const {details} = props
  const {categoryId, thumbnailUrl} = details
  console.log(categoryId)
  return (
    <div className="movie">
      <img src={thumbnailUrl} alt="mov" className="movie-image" />
      <p className="pp">{categoryId}</p>
    </div>
  )
}

export default MovieItem
