import {Component} from "react"

import { Link } from 'react-router-dom';
import "./index.css"

class Navbar extends Component{
  state = {searchText:''}

  onChangeSearch = (event) =>{
    this.setState({searchText:event.target.value})
  }

  onClickSearch = () => {
    this.setState({searchText:""})
  }

  render(){
    const {searchText} = this.state
    return (
    <nav className='nav-container'>
      <h1 className='nav-heading'>MovieDb</h1>
      <div className='link-items-container'>
      <ul className='nav-list-container'>
        <li className='list-item'><Link to="/" className='link-item'>Popular</Link></li>
        <li className='list-item'><Link to="/top-rated" className='link-item'>Top Rated</Link></li>
        <li className='list-item'><Link to="/upcoming" className='link-item'>Upcoming</Link></li>
        </ul>
        <div>
            <input type="text" placeholder="Movie Name" className='input-item' onChange={this.onChangeSearch} value={searchText}/>
          <Link to={`/search/${searchText}`}className='link-item'>
            <button type="button" className='search-button' onClick={this.onClickSearch}>Search</button>
          </Link>
       </div>
       </div>
    </nav>
  );
    }}

export default Navbar;
