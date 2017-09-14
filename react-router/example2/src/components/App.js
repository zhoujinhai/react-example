'use stract';

import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,Link,hashHistory,IndexRoute,Redirect,IndexLink} from 'react-router'; 

//引入Antd的导航组件
import {Menu, Icon} from 'antd';
const SubMenu = Menu.SubMenu;

var Introduce = React.createClass({
	render: function(){
		return (
			<div>
				<h2>Now, you are using react-router apply!</h2>
			</div>	
		);
	}
});

var Table = React.createClass({
	render: function(){
		return (
			<div>
				<h2>表格页面</h2>
			</div>
		);
	}
});

var TheForm = React.createClass({
	render: function(){
		return (
			<div>
				<h2>表单</h2>
			</div>
		);
	}
});


class Sider extends React.Component {
	//定义Sider类的构造函数
	constructor(props){
		//调用父类的构造函数
		super(props);
		this.state = {
			current: '0',
			username: ''
		};
	}

	handleClick(e){
		this.setState({
			current: e.key
		});
	}

	componentDidMount(){
		this.setState({
			username: 'zjh'
		});
	}

	render(){
		return(
			<div>
				<div id="leftMenu">
					<img src="./src/public/images/logo.png" width="50" id="logo" />
					<Menu theme='dark' onClick={this.handleClick.bind(this)} style={{ width: 200}} defaultOpenKeys={['sub1','sub2']} defaultSelectedKeys={[this.state.current]} mode="inline">
						<Menu.Item key="0"><Link to="/introduce"><Icon type='mail' /><span>没有子菜单</span></Link></Menu.Item>
						<SubMenu key="sub1" title={<span><Icon type="bars" /><span>点击展开</span></span>}>
							<Menu.Item key="1"><Link to="/table">表格</Link></Menu.Item>
							<Menu.Item key="2"><Link to="/form">表单</Link></Menu.Item>
						</SubMenu>
					</Menu>
				</div>
				<div id="rightWrap">
					<Menu mode="horizontal">
						<SubMenu title={<span><Icon type="user" /><span>{this.state.username}</span></span>}>
							<Menu.Item key="setting:1">退出</Menu.Item>
						</SubMenu>
					</Menu>
					<div className="right-box">
						{this.props.children}
					</div>
				</div>
			</div>
		)
	}
}



//配置路由
ReactDOM.render((
	<Router history={hashHistory}>
		<Route path="/" component={Sider}>
			<IndexRoute component={Introduce} />
			<Route path="introduce" component={Introduce} />
			<Route path="table" component={Table} />
			<Route path="form" component={TheForm} />
		</Route>
	</Router>
), document.getElementById('test'));






