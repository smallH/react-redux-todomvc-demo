import * as types from '../constants/ActionTypes'

// 添加任务
export const addTodo = text => ({ type: types.ADD_TODO, text })
// 删除任务
export const deleteTodo = id => ({ type: types.DELETE_TODO, id })
// 编辑任务
export const editTodo = (id, text) => ({ type: types.EDIT_TODO, id, text })
// 完成任务
export const completeTodo = id => ({ type: types.COMPLETE_TODO, id })
// 所有任务已完成
export const completeAllTodos = () => ({ type: types.COMPLETE_ALL_TODOS })
// 所有任务未完成
export const clearCompleted = () => ({ type: types.CLEAR_COMPLETED })
// 过滤任务
export const setVisibilityFilter = filter => ({ type: types.SET_VISIBILITY_FILTER, filter})
