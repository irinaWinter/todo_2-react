import React from 'react'
import Nav from './nav/Nav'
import './Header.css'

export default () => (
	<header className="header">
		<Nav />
		<h1 className="header__heading">Website todo</h1>
	</header>
)