import React, {PureComponent} from 'react'
import Task from '../Task'
import './style.css'

export default class TodoList extends PureComponent {
	render() {
		const taskElements = this.props.task.map((task, index) =>
			<li key = {task.id} className="todo-list__task task">
				<Task task = {task} />
			</li>
		)

		return (
			<ul className="todo-list-section todo-list">
				{taskElements}
			</ul>
		)
	}
}
