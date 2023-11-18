// Write your code here
import Slider from 'react-slick'
import MovieItem from '../MovieItem'

const MoviesSlider = props => {
  const {moviesList} = props
  const settings = {
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 4,
  }
  return (
    <Slider {...settings}>
      {moviesList.map(each => (
        <MovieItem key={each.id} details={each} />
      ))}
    </Slider>
  )
}
export default MoviesSlider
