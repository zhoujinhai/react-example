import React from 'react';

class AppHeader extends React.Component{
	handleKeyUp(e){
		//enter键的ASCILL
		if(e.keyCode === 13){
			let value = e.target.value;
			if(!value){
				return false;
			}
			let newWorkItem = {
				text:value,
				isDone:false
			};
			e.target.value = '';
			this.props.addWork(newWorkItem); 
		}
	}
	render(){
		return (
			<div className="work-header" >
				<input onKeyUp={this.handleKeyUp.bind(this)} type="text" placeholder="输入任务名，并按回车" />
			</div>
		)
	}
}

export default AppHeader;