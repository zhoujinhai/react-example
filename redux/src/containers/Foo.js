import React,{Component,PropTypes} from 'react'; //引入react
import {connect} from 'react-redux'; //引入connect
import List from '../components/Lists'; //引入展示组件List

class Foo extends Component{
	render(){
		//通过this.props获取到lists的值
		const {lists} = this.props;
		return(
			<div>
				<ul className='list-group'>
					{lists.map((e,index)=>
						<List text={e.text} key={index}></List>
					)}
				</ul>
			</div>
		)
	}
} 

//验证参数
Foo.propTypes = {
	lists: PropTypes.arrayOf(PropTypes.shape({
		text: PropTypes.string.isRequired
	}).isRequired).isRequired
}

//获取state中的lists值
const getList = state => {
	return {
		lists: state.update.lists
	}
}

//利用connect将组件与redux绑定
export default connect(getList)(Foo);

