import React,{Component,PropTypes} from 'react';

export default class List extends Component{
	render(){
		return(
			<li className="list-group-item">{this.props.text}</li>
		)
	}
}

List.PropTypes = {
	text: PropTypes.string.isRequired
}