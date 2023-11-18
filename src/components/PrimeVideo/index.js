// Write your code here
import MoviesSlider from '../MoviesSlider'
import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props
  return (
    <div className="main-cont">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="prime-image"
      />
      <div className="videos-cont">
        <h1 className="head">Action Movies</h1>

        <div className="action-movies-cont">
          <MoviesSlider moviesList={moviesList} />
        </div>
      </div>
    </div>
  )
}

export default PrimeVideo
