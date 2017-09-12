'use strict';
//引入相关模块和组件
import React from 'react';
import ReactDOM from 'react-dom';
import LocalDb from '../LocalDb/index.js';
import AppHeader from './AppHeader.js';
import AppMain from './AppMain.js';
import AppFooter from './AppFooter.js';

//定义组件
class App extends React.Component {
	//定义App类的构造函数
	constructor() {
		super(); //调用父类的构造函数
		this.db = new LocalDb('ReactDemo');
		//定义组件初始状态
		this.state = {
			works: this.db.get('works') || [],
			isAllChecked: false
		};
	}

	//判断是否所有状态都完成
	allChecked() {
		let isAllChecked = false;
		if(this.state.works.every(work => work.isDone)){
			isAllChecked = true;
		}
		//改变状态，重绘组件
		this.setState({
			works: this.state.works,
			isAllChecked: isAllChecked
		});
	}

	//添加任务，传给AppHeader组件
	addWork(workItem){
		this.state.works.push(workItem); //work列表
		this.db.set('works',this.state.works);
		this.allChecked();
	}

	//删除当前任务，传给AppItem组件
	deleteWork(index){
		this.state.works.splice(index,1);
		this.setState({works: this.state.works});
		this.db.set('works',this.state.works);
	}

	//清除已完成的任务，传给AppFooter组件
	clearDone(){
		//过滤掉已经完成的任务
		let works = this.state.works.filter(work => !work.isDone);
		this.setState({
			works: works,
			isAllChecked: false
		});
		this.db.set('works',works);
	}

	//改变任务状态，传给AppItem和AppFooter组件
	changeWorkState(index,isDone,isChangeAll=false){
		//选择全部改变
		if(isChangeAll){
			this.setState({
				works: this.state.works.map((work) => {
					work.isDone = isDone;
					return work;
				}),
				isAllChecked: isDone
			})
		}else{ //否则改变一个
			this.state.works[index].isDone = isDone;
			this.allChecked();
		}
		this.db.set('works',this.state.works);
	}

	//渲染组件
	render(){
		let info = {
			isAllChecked: this.state.isAllChecked,
			workCount: this.state.works.length || 0,
			workDoneCount: (this.state.works && this.state.works.filter((work) => work.isDone)).length || 0
		};
		return (
			<div className = "apply-wrap">
				<AppHeader addWork={this.addWork.bind(this)} />
				<AppMain works={this.state.works} deleteWork={this.deleteWork.bind(this)} changeWorkState={this.changeWorkState.bind(this)} />
				<AppFooter {...info} changeWorkState={this.changeWorkState.bind(this)} clearDone={this.clearDone.bind(this)} />
			</div>
		);
	}
}

ReactDOM.render(<App/>, document.getElementById('app'));