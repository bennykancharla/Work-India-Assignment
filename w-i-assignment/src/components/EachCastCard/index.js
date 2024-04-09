import "./index.css"

const EachCastCard = (props) =>{
    const {castCardDetails} = props 
    const {character,name,profile_path} = castCardDetails
    // console.log(castCardDetails)

    return(
    <li className="cast-list-item">
        <img className="cast-image" src={`https://image.tmdb.org/t/p/w500/${profile_path}`} alt={name} />
        <p className="cast-name">{name}</p>
        <p className="cast-name">Character: {character}</p>
    </li>
)}

export default EachCastCard