import React from 'react';
import './BannerDisplay.css';

const base_url = `https://image.tmdb.org/t/p/original`;
const BannerDisplay = (props) => {
  const renderBanner=({data})=>{
  	var a =	`${base_url}${data.poster_path}`;
  	const mystyle={
  		backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)) ,url(${a})`,
  		backgroundRepeat : 'no-repeat',
      backgroundSize: 'cover',
  		backgroundPosition : 'center center',
  		height : '70vh', 
  	};
  	if(data){
  		return(
  			<header style={mystyle} className="mb-3">
  				<img className="pt-1 pl-1" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/250px-Netflix_2015_logo.svg.png" alt="" style={{height:30}}/>
	  			<div className="container-fluid">
	  				<div className="content">
	  					<p className="heading">{data.original_name}</p>
	  					<p>{data.overview.slice(0, 130)} ...</p>
	  					<button className="btn-banner mr-2">Play</button>&nbsp;
	  					<button className="btn-banner">My List</button>
	  				</div>
	  				
	  			</div>
  			</header>
  		)
  	}
  }
  return (
  	<>
    {renderBanner(props)}
    </>
  )
}

export default BannerDisplay;