import React from 'react'
import PropTypes from 'prop-types'
import FilterLink from '../containers/FilterLink'
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../constants/FilterTypes'

const FILTER_TITLES = {
	[SHOW_ALL]: '全部',
	[SHOW_ACTIVE]: '未完成',
	[SHOW_COMPLETED]: '已完成'
}

class Footer extends React.Component {
	static propTypes = {
		completedCount: PropTypes.number.isRequired,
		activeCount: PropTypes.number.isRequired,
		onClearCompleted: PropTypes.func.isRequired,
	}

	constructor(props) {
		super(props);
		this.static = {};
	}

	render() {
		const {activeCount, completedCount, onClearCompleted} = this.props;
		return(
			<footer className="footer">
		      <span className="todo-count">
		        剩余 <strong>{activeCount || '0'}</strong> 个 
		      </span>
		      <ul className="filters">
		        {Object.keys(FILTER_TITLES).map(filter =>
		          <li key={filter}>
		            <FilterLink filter={filter}>
		              {FILTER_TITLES[filter]}
		            </FilterLink>
		          </li>
		        )}
		      </ul>
		      {
		        !!completedCount && <button className="clear-completed" onClick={onClearCompleted}>清除已完成任务</button>
		      }
    		</footer>
		);
	}
}

export default Footer