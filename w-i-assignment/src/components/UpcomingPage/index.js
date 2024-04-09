import {Component} from "react"

import MovieCard from "../MovieCard"

import  * as Loader from 'react-loader-spinner'

import "./index.css"

// https://api.themoviedb.org/3/movie/upcoming?api_key=32ea549035e918ed996ef78a24fb8566&language=en-US&page=1



class UpcomingPage extends Component{
  state = {upcomingMovieCardList : [],isLoading:true, pageNum:1}

    componentDidMount(){
        this.upcomingMovies()
        }

        upcomingMovies = async () => {
          try{
          const {pageNum} = this.state
        const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=32ea549035e918ed996ef78a24fb8566&language=en-US&page=${pageNum}`
        const response = await fetch(url);
          // console.log(response)
       
      if(response.status === 200){
        // console.log("s")
        const data = await response.json()
      this.setState({upcomingMovieCardList:data.results,isLoading:false})
      }
    }catch(e){
      console.log(`Error: ${e.message}`)
    }
        
    }

    getLoader = () =>{ 
      return(
        <div className="top-loader-container">
            <Loader.Oval  color="#ffffff" height={50} />
        </div>
      )
    }

    getUpcomingMovieCards = () => {
      const {upcomingMovieCardList} = this.state
      return (
      <ul className="top-rated-movie-cards-list-container">
        {upcomingMovieCardList.map((each) => 
        <MovieCard key={each.id} cardDetails = {each} />)
        }
        </ul>
        )
    }

    onDecrement = () => {
      const {pageNum} = this.state
      
      if (pageNum>0){
        // console.log(pageNum)
        this.setState((prev) => ({
          pageNum: prev.pageNum - 1
        }), this.upcomingMovies )
      }
    }

    onIncrement = () => {
      // console.log("a")
      this.setState((prev) => ({
        pageNum : prev.pageNum + 1
      }),this.upcomingMovies )
    }

    render(){
      const {isLoading} = this.state
      // console.log(pageNum)
        return(
            <div className="top-rated-container">
              <div className="heading-pages">
              <h1 className="top-rated-heading">Upcoming Movie Page</h1>
              <div className="pagination-container">
                <button type="button" className="pagination-btn" onClick={this.onDecrement}>Previous</button>
                <button type="button" className="pagination-btn" onClick={this.onIncrement}>Next</button>
              </div>
              </div>
             {
              isLoading ? this.getLoader() : this.getUpcomingMovieCards()
             }
            </div>
          )
    }
} 
  


export default UpcomingPage;