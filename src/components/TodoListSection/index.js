import React from 'react'
import TodoList from '../TodoList'
import tasks from '../../tasks'
import './style.css'

export default function TodoListSection () {
	return (
		<section className="todo-list-section">
			<h2 className="visually-hidden">Todo list</h2>
			<TodoList task = {tasks} />
		</section>
	)
}
