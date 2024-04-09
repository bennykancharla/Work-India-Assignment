import "./index.css"

const SingleMovieView = (props) =>{
    const {movieDetails} = props 
    const {poster_path,vote_average,runtime,title,overview,release_date} = movieDetails
    // console.log(movieDetails)
    return(
    
        <div className="movie-detail-top-half">
            <div className="movie-detail-top-contents">
                <img className="poster-image" src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title}/>
                <div className="middle-container">
                    <h2 className="title">{title}</h2>
                    <p className="rating">Rating: {vote_average}</p>
                    <div className="runtime-genre-container">
                        <p className="runtime">{runtime}min</p>
                        {/* <ul className="genre-container">
                            {
                                genres.map((each) => <li key={each.id} className="genre-list-item">{each.name}</li>)
                            }
                        </ul> */}
                    </div>
                    <p className="title">Release Date: {release_date}</p>
                </div>
            </div>
            <div>
                <h2 className="title">Overview</h2>
                <p className="title">{overview}</p>
            </div>
        </div>
       
)
}
export default SingleMovieView

//  {/* <img src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`} alt={title} /> */}
  