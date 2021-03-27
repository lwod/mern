import  React, {useContext} from 'react'
import {NavLink, useHistory} from 'react-router-dom'
import {AuthContext} from "../context/AuthContex";

export const Navbar = () => {
	
	const history = useHistory()
	
	const auth = useContext(AuthContext)
	
	const logoutHandler = (event)=>{
		event.preventDefault();
		auth.logout();
		history.push('/')
	}
	
	return(
		<nav>
			<div className="nav-wrapper">
				<a href="#" className="brand-logo">Сокращение ссылок</a>
				<ul id="nav-mobile" className="right hide-on-med-and-down">
					<li><NavLink to={'/create'}></NavLink>Создать</li>
					<li><NavLink to={'/links'}></NavLink>Ссылки</li>
					<li><a href={'/'} onClick={logoutHandler}></a>Выйти</li>
				</ul>
			</div>
		</nav>
	)
}
