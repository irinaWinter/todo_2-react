import React from 'react'
import TodoListSection from './TodoListSection'
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
			
			<TodoListSection />
		</div>
	)
}

export default App;
