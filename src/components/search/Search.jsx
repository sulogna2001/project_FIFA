import React from 'react'
import './Search.css'
import { Link } from 'react-router-dom'

 const Search = (props) => {
     console.log(props)
    return (
        
            <div className='search-right'>
            <img src={props.value.img}alt='' className='img'></img><br/>
              <b>Name: </b>{props.value.name}<br />
              <b>Nationality: </b>{props.value.nationality}<br />
              <b>Club: </b>{props.value.club}<br />
              <b>Jersey: </b>{props.value.jersey}

            <Link to = {`/profile/${props.value.id}`}>
            <button className='submit'>Profile</button>
            </Link>
            </div>
            
       
    )
}
export default Search