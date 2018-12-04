import { SET_VISIBILITY_FILTER } from '../constants/ActionTypes'
import { SHOW_ALL } from '../constants/FilterTypes'

// @props state[String] 过滤类型（全部、已完成、未完成）：默认为显示全部
const visibilityFilter = (state = SHOW_ALL, action) => {
	switch(action.type) {
		case SET_VISIBILITY_FILTER:
			return action.filter
		default:
			return state
	}
}

export default visibilityFilter