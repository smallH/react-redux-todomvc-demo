import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import undoable from 'redux-undo'

// todos 任务列表增删改查
// visibilityFilter设置滤逻条件
const rootReducer = combineReducers({
	todos: undoable(todos),
	visibilityFilter
})

export default rootReducer