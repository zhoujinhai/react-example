import React from 'react' //引入React
import ReactDOM from 'react-dom' //引入render方法
import {Provider} from 'react-redux' //利用Provider讲store传递给所有组件
import {Router,browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux'

import finalCreateStore from './store/configureStore.js'//引入store配置
import DevTools from './containers/DevTools'//引入Redux调试工具DevTools
import reducer from './reducers'//引入reducers集合
import routes from './routes'//引入路由配置

import './public/css/bootstrap.min.css' //引入样式文件

//给store传入reducer
const store = finalCreateStore(reducer); 

//创建一个history来结合store同步导航事件
const history = syncHistoryWithStore(browserHistory,store);

ReactDOM.render(
	<Provider store={store}>
		<div>
			//渲染路由
			<Router history={history} routes={routes} />
			//渲染调试组件
			<DevTools />
		</div>
	</Provider>,
	document.getElementById('test')
)