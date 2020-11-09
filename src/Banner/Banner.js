import  React, { Component } from 'react';
import BannerDisplay from './BannerDisplay';

export default class Banner extends Component {
	constructor(){
		super()
		this.state={
			movie:''
		}
	}
	render() {
		return (
			<>
	
				<BannerDisplay data={(this.state.movie)}/>
			</>
		);
	}
	componentDidMount(){
		fetch(this.props.fetchUrl, {method:"GET"})
		.then((res)=> res.json())
		.then((data)=>{
			console.log(data.length)
			this.setState({movie: data.results[Math.floor(Math.random() * data.results.length - 1)]})
		});
	}
}
