import { createSelector } from 'reselect'
import * as FilterTypes from '../constants/FilterTypes'

const getVisibilityFilter = state => state.visibilityFilter
const getTodos = state => state.todos.present

// 获得任务总数量
export const getTodosLength = createSelector([getTodos], (todos) => (
	todos.length
))

// createSelector的作用在于缓存输入输出，若输入相同时则不会重新计算，直接返回输出值。
// 获得过滤条件下的任务列表
export const getVisibleTodos = createSelector([getVisibilityFilter, getTodos], (visibilityFilter, todos) => {
	switch(visibilityFilter) {
		case FilterTypes.SHOW_ALL:
			return todos
		case FilterTypes.SHOW_COMPLETED:
			return todos.filter(t => t.completed)
		case FilterTypes.SHOW_ACTIVE:
			return todos.filter(t => !t.completed)
		default:
			throw new Error('Unknown filter: ' + visibilityFilter)
	}
})

// 获取已经完成的任务数量
export const getCompletedTodoCount = createSelector([getTodos], (todos) => (
	todos.reduce((count, todo) => todo.completed ? count + 1 : count, 0)
))
// 等价于
//export const getCompletedTodoCount = state => state.todos.reduce((count, todo) => (todo.completed ? count + 1 : count), 0);
