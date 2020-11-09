import React from 'react';
import './RowDisplay.css';

const base_url = `https://image.tmdb.org/t/p/original`;
const RowDisplay = (props) => {
  const renderRow=({data})=>{
  	if(data){
  		return data.map((item)=>{
  			return(
  				<img key={item.id} src={`${base_url}${item.poster_path}`} className="poster" alt={item.backdrop_path}/>
  			)
  		})
  	}
  }
  return (
    <>
    	{renderRow(props)}
    </>
  )
}

export default RowDisplay;