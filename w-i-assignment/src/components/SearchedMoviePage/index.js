import {useEffect, useState} from "react"

import  * as Loader from 'react-loader-spinner'

import MovieCard from "../MovieCard"

import "./index.css"

import { useParams } from "react-router-dom"


const SearchedMoviePage = () => {
  const [searchedMoviesList,setSearchMovies] = useState([])
  const [isLoading,setLoading] = useState(true)
  const [pageNum,setPageNum] = useState(1)
  const {searchInput} = useParams()
  // console.log(searchInput)

  useEffect(() =>{ 
    getSearchedMovie();
  },[pageNum])
  

  const getSearchedMovie = async () =>{
    try{
      // console.log(pageNum)
      const url = `https://api.themoviedb.org/3/search/movie?api\_key=32ea549035e918ed996ef78a24fb8566&language=en-US&query=${searchInput}&page=${pageNum}`
    const response = await fetch(url)
    const data = await response.json()
    // console.log(data)
    setSearchMovies(data.results)
    setLoading(false)
  }catch(e){
    console.log(`Error: ${e.message}`)
  }

  }

  const getLoader = () => (
    <div className="top-loader-container">
    <Loader.Oval  color="#ffffff" height={50} />
</div>
  )

  const getSearchedMovieCards = () => (
    <ul className="top-rated-movie-cards-list-container">
    {searchedMoviesList.map((each) => 
    <MovieCard key={each.id} cardDetails = {each} />)
    }
    </ul>
  )
    
  const onIncrement = () => {
    // console.log(pageNum)
    setPageNum(page => page + 1)
  }

  const onDecrement = () => {
    if(pageNum > 1){
      setPageNum(page => page - 1)
    }
  }

      return(
        <div className="top-rated-container">
        <div className="heading-pages">
        <h1 className="top-rated-heading">Search Movie Page</h1>
        <div className="pagination-container">
          <button type="button" className="pagination-btn" onClick={onDecrement}>Previous</button>
          <button type="button" className="pagination-btn" onClick={onIncrement}>Next</button>
        </div>
        </div>
       {
        isLoading ? getLoader() : getSearchedMovieCards()
       }
      </div>
    )
  }

  
  export default SearchedMoviePage;