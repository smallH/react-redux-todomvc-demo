import React from 'react'
import { ActionCreators as UndoActionCreators } from 'redux-undo'
import { connect } from 'react-redux'
import classnames from 'classnames'

let UndoRedo = ({
	onUndo,
	onRedo
}) => (
	<div className={classnames({ "undoredu": true })}>
	    <div onClick={onUndo} className={classnames({ "undoredu-btn": true })}>
	     	撤销
	    </div>
	    <div onClick={onRedo} className={classnames({ "undoredu-btn": true })}>
	      	重做
	    </div>
	 </div>
)

const mapDispatchToProps = ({
	onUndo: UndoActionCreators.undo,
	onRedo: UndoActionCreators.redo
})

UndoRedo = connect(
	null,
	mapDispatchToProps
)(UndoRedo)

export default UndoRedo