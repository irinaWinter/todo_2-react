import React, {Component} from 'react'
import Task from '../Task'
import './style.css'

export default class TodoList extends Component {
	render() {
		const taskElements = this.props.task.map((task, index) =>
			<li key = {task.id} className="todo-list__task task">
				<Task task = {task} />
			</li>
		)

		return (
			<section className="todo-list-section">
				<h2 className="visually-hidden">Todo list</h2>
				<ul className="todo-list-section todo-list">
					{taskElements}
				</ul>
			</section>	
		)
	}
}
