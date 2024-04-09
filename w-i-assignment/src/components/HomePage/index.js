import {Component} from "react"

import MovieCard from "../MovieCard"

import  * as Loader from 'react-loader-spinner'

import "./index.css"



// https://api.themoviedb.org/3/movie/popular?api_key=${Api_key}&language=en-US&page=1

class HomePage extends Component{
  state = {movieCardList : [],isLoading:true,pageNum:1}

    componentDidMount(){
        this.getAllMovies()
        }

    getAllMovies = async () => {
      try{
      const {pageNum} = this.state
        const url = `https://api.themoviedb.org/3/movie/popular?api_key=32ea549035e918ed996ef78a24fb8566&language=en-US&page=${pageNum}`
        const response = await fetch(url);
        if(response.status === 200){
        const data = await response.json()
      this.setState({movieCardList:data.results,isLoading:false})
        }
      }catch(e){
        console.log(`Error: ${e.message}`)
      }
    }

    getLoader = () =>{ 
      return(
        <div className="loader-container">
            <Loader.Oval  color="#ffffff" height={50} />
        </div>
      )
    }

    getMovieCards = () => {
      const {movieCardList} = this.state
      return (
      <ul className="movie-cards-list-container">
        {movieCardList.map((each) => 
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
        }), this.getAllMovies )
      }
    }

    onIncrement = () => {
      // console.log("a")
      this.setState((prev) => ({
        pageNum : prev.pageNum + 1
      }),this.getAllMovies )
    }

    render(){
      const {isLoading} = this.state
      // console.log(movieCardList)
        return(
            <div className="home-container">
               <div className="heading-pages">
              <h1 className="home-heading">Popular Movie Page</h1>
                <div className="pagination-container">
                  <button type="button" className="pagination-btn" onClick={this.onDecrement}>Previous</button>
                  <button type="button" className="pagination-btn" onClick={this.onIncrement}>Next</button>
                </div>
              </div>
             {
              isLoading ? this.getLoader() : this.getMovieCards()
             }
            </div>
          )
    }
} 
  


export default HomePage