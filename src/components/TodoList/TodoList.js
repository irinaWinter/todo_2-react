import React, {Component} from 'react'
import Task from './task/Task'
import './TodoList.css'

export default class TodoList extends Component {
	render() {
		const todoListHeading =
			<h2 className="visually-hidden">
				Todo list
			</h2>

		const taskElement =
			<li className="todo-list__task task">
				<Task />
			</li>

		return (
			<section className="todo-list-section">
				{todoListHeading}
				<ul className="todo-list-section todo-list">
					{taskElement}
				</ul>
			</section>	
		)
	}
}
