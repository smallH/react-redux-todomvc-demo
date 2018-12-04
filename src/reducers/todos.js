import * as ActionTypes from '../constants/ActionTypes'

const initialState = [{
		text: '任务-1',
		completed: false,
		id: 0
	},
	{
		text: '任务-2',
		completed: true,
		id: 1
	}
]

// @props state[Array] 任务列表
const todos = (state = initialState, action) => {
	switch(action.type) {
		case ActionTypes.ADD_TODO:
			// id属性计算：等于todos中id数值最大+1，Array.reduce()为计数函数。
			return [
				...state,
				{
					id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
					completed: false,
					text: action.text
				}
			]

		case ActionTypes.DELETE_TODO:
			return state.filter(todo =>
				todo.id !== action.id
			)

		case ActionTypes.EDIT_TODO:
			return state.map(todo =>
				todo.id === action.id ? { ...todo,
					text: action.text
				} :
				todo
			)

		case ActionTypes.COMPLETE_TODO:
			return state.map(todo =>
				todo.id === action.id ? { ...todo,
					completed: !todo.completed
				} :
				todo
			)

		case ActionTypes.COMPLETE_ALL_TODOS:
			const areAllMarked = state.every(todo => todo.completed)
			return state.map(todo => ({
				...todo,
				completed: !areAllMarked
			}))

		case ActionTypes.CLEAR_COMPLETED:
			return state.filter(todo => todo.completed === false)

		default:
			return state
	}
}

export default todos