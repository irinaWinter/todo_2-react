import React, {PureComponent} from 'react'
import './style.css'

class Task extends PureComponent {
	constructor(props) {
		super(props)
	}

	render() {
		const {task} = this.props

		return (
			<p className="task__text">{task.text}</p>
		)
	}
}

export default Task;
