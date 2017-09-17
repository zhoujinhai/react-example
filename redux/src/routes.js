import React from 'react';
import {Route,IndexRoute} from 'react-router'; //引入react路由
//引入各容器组件
import App from './containers/App.js'; 
import Home from './containers/Home.js'; 
import Foo from './containers/Foo.js'; 
import Bar from './containers/Bar.js';
import Antd from './containers/Antd.js';  

export default (
	<Route path="/" component={App}>
		<IndexRoute component={Home} />
		<Route path="index" component={Home} />
		<Route path="foo" component={Foo} />
		<Route path="bar" component={Bar} />
		<Route path="antd" component={Antd} />
	</Route>
) 