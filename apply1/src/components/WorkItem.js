import React from 'react';
import ReactDOM from 'react-dom';

//AppMain的子组件
class WorkItem extends React.Component {
	//改变任务状态
	handleChange() {
		let isDone = !this.props.isDone;
		this.props.changeWorkState(this.props.index,isDone);
	}
	//鼠标移动
	handleMouseOver() {
		ReactDOM.findDOMNode(this).style.background="#eee";
		ReactDOM.findDOMNode(this.refs.delButton).style.display="inline-block";
	}
	handleMouseOut() {
		ReactDOM.findDOMNode(this).style.background="#fff";
		ReactDOM.findDOMNode(this.refs.delButton).style.display="none";
	}
	//删除当前任务
	handleDelete(){
		this.props.deleteWork(this.props.index);
	}

	render(){
		let className = this.props.isDone?'task-done':'';
		return (
			<li onMouseOver={this.handleMouseOver.bind(this)} onMouseOut={this.handleMouseOut.bind(this)}>
				<label>
					<input type="checkbox" checked={this.props.isDone} onChange={this.handleChange.bind(this)} />
					<span className={className}>{this.props.text}</span>
				</label>
				<button ref="delButton" id="del-btn" className="btn btn-danger" onClick={this.handleDelete.bind(this)}>删除</button>
			</li>
		)
	}
}

export default WorkItem;