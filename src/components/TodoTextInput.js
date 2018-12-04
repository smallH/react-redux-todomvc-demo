import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

export default class TodoTextInput extends React.Component {
	static propTypes = {
		onSave: PropTypes.func.isRequired,
		text: PropTypes.string,
		placeholder: PropTypes.string,
		blurSaveBo: PropTypes.bool
	}

	constructor(props) {
		super(props);
		this.state = {
			text: this.props.text || ''
		}
	}

	handleSubmit = e => {
		const text = e.target.value.trim()
		if(e.which === 13) {
			this.props.onSave(text)
		}
	}

	handleChange = e => {
		this.setState({
			text: e.target.value
		})
	}

	handleBlur = e => {
		if(this.props.blurSaveBo) {
			this.props.onSave(e.target.value)
		}
	}

	render() {
		return(
			<input className={classnames({'new-todo': true})} 
				type="text"
		        placeholder={this.props.placeholder}
		        autoFocus={true}
		        value={this.state.text}
		        onBlur={this.handleBlur}
		        onChange={this.handleChange}
		        onKeyDown={this.handleSubmit}
		    />
		)
	}
}