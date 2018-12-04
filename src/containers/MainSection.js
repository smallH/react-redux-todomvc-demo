import { connect } from 'react-redux'
import * as TodoActions from '../actions'
import { bindActionCreators } from 'redux'
import MainSection from '../components/MainSection'
import { getCompletedTodoCount, getTodosLength } from '../selectors'

const mapStateToProps = (state, ownProps) => ({
	todosCount: getTodosLength(state),
	completedCount: getCompletedTodoCount(state)
})

// bindActionCreators语法：actions继承了TodoActions所有方法，并实现了方法引用上 actions.add 等效于 dispatch(TodoActions.add) 的功能
const mapDispatchToProps = (dispatch, ownProps) => ({
	actions: bindActionCreators(TodoActions, dispatch)
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(MainSection)