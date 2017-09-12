import React from 'react';

class AppFooter extends React.Component {
	//改变任务状态
	handleSelectAll(e){
		this.props.changeWorkState(null,e.target.checked,true);
	}
	//删除已完成的任务
	handleDeleteDone(){
		this.props.clearDone();
	}
	render(){
		return (
			<div className="work-footer">
				<label>
					<input type="checkbox" checked={this.props.isAllChecked} onChange={this.handleSelectAll.bind(this)} />全选
				</label>
				<span><span className="text-success">已完成{this.props.workDoneCount}</span>|全部{this.props.workCount}</span>
				<button className="btn btn-danger" onClick={this.handleDeleteDone.bind(this)}>清除已完成任务</button>		
			</div>
		)
	}
}

export default AppFooter;