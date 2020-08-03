import React from 'react'
import TodoList from './TodoList'
import tasks from '../tasks'
import '../index.css'

function App () {
	return (
		<div className="app">
			{/* header в компонент */}
			<header className="header">
				{/* nav в компонент */}
				<nav className="header__main-nav main-nav">
					{/* button в компонент */}
					<button className="main-nav__burger">Бургер</button>
				</nav>
				<h1 className="header__heading">Website todo</h1>
			</header>
			
			<TodoList task = {tasks} />
		</div>
	)
}

export default App;
