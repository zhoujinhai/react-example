//合并reducer
import {combineReducers} from 'redux'; //利用combineReducers合并reducers
import {routerReducer} from 'react-router-redux'; //将routerReducer一起合并
import update from './count'; //引入count这个reducer

export default combineReducers({
	update,
	routing: routerReducer
})
