import React from 'react'
import './Task.css'

export default function Task (props) {
	const {task} = props

	return <label className="task__text" htmlFor={task.id}>{task.description}</label>
}
