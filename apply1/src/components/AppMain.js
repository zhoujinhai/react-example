import React from 'react';
import WorkItem from './WorkItem.js';

class  AppMain extends React.Component {
	render(){
		if(this.props.works.length===0){
			return(
				<div className="work-empty">当前没有任务</div>
			)
		}else{
			return (
				<ul className="work-main">
					{
						this.props.works.map((work,index)=>{
							//...this.props 用来传递属性和方法
							return <WorkItem  key={index} text={work.text} isDone={work.isDone} index={index} {...this.props} />
						})
					}
				</ul>
			)
		}
	}
}

export default AppMain;