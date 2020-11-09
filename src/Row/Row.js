import React, { Component } from 'react';
import RowDisplay from './RowDisplay';
import './Row.css'

export default class Row extends Component {
	constructor(){
		super()
		this.state={
			movie: ''
		}
	}
	render() {
		return (
			<>
				<div className="my-2">
					<h5 className="pl-2">{this.props.title}</h5>
					<div className="d-flex poster--mov">
						<RowDisplay data={this.state.movie}/>
					</div>
				</div>
				
				
			</>
		);
	}
	componentDidMount(){
		fetch(this.props.fetchUrl, {method:"GET"})
		.then((res)=>res.json())
		.then((data)=>{this.setState({movie: data.results})});
	}
}
