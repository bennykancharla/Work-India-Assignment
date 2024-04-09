import {useEffect, useState} from "react"

import { useParams } from "react-router-dom"



import "./index.css"
import SingleMovieView from "../SingleMovieView"
import EachCastCard from "../EachCastCard"

const MovieDetailPage =() => {
    const [movieDetailedView, setDetailedView] = useState({})
    const [castDetails,setCast] = useState([])
   useEffect(()=>{
    getDetailPage();
   },[])
   const {id} = useParams()
//    console.log(id)

    const getDetailPage = async () => {
       try{ 
        const url = `https://api.themoviedb.org/3/movie/${id}?api_key=32ea549035e918ed996ef78a24fb8566&language=en-US`
        const response = await fetch(url)
        const data = await response.json()
        // console.log(data)
        setDetailedView(data)
        const castUrl = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=32ea549035e918ed996ef78a24fb8566&language=en-US`
        const castResponse =  await fetch(castUrl)
        const castData = await castResponse.json()
        // console.log(castData.cast)
        setCast(castData.cast)
       }catch(e){
        console.log(`Error: ${e.message}`)
       }
    }

    const getCastSection = () => (
        <div className="cast-container"> 
            <h1 className="cast-heading">Cast</h1>
           <ul className="cast-list-container">
            {
                castDetails.map((each) => 
                <EachCastCard key ={each.cast_id} castCardDetails={each} />
                )
            }
           </ul>
        </div>
    )
  
    return(
        <div className="movie-detail-container">
            <SingleMovieView movieDetails={movieDetailedView} />
            {getCastSection()}
        </div>
        )
    

}

export default MovieDetailPage