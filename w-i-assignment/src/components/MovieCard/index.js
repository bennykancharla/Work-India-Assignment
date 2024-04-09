import { Link } from 'react-router-dom';

import "./index.css"

const MovieCard = (props) => {
    const {cardDetails} = props
    const {title,poster_path,vote_average,id} = cardDetails
    // console.log(title)
    return(
        <Link to={`/movie/${id}`} className='links'>
    <li className="movie-list-item">
        <img className="movie-card-image" src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title} />
        <h3 className="card-heading">{title}</h3>
        <p className="card-rating">Rating: {vote_average}</p>
    </li>
    </Link>
)}

export default MovieCard