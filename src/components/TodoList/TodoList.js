import React, {Component} from 'react'
import Task from './task/Task'
import tasks from '../../tasks.js'
import './TodoList.css'

export default class TodoList extends Component {
  state = {
    tasks: tasks,
    done: false
  }

  render() {
    const todoListHeading =
      <h2 className="visually-hidden">
        Todo list
      </h2> 

    const taskElements = this.state.tasks.map(task =>
      <li  key = {task.id} className="todo-list__task task">
        <input type="checkbox" name={task.id} id={task.id} />
        <Task task = {task} />
        <button>Delete task</button>
      </li>
    )

    return (
      <section className="todo-list-section">
        {todoListHeading}
        <ul className="todo-list-section__todo-list todo-list">
          {taskElements}
        </ul>
        <button>+ New task</button>
      </section>  
    )
  }
}
