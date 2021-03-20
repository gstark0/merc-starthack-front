import React, { Component } from 'react'
import './style.css'
import logo from '../../assets/logo.png';

export class Background extends Component {
	render() {
		return (
			<div className='background'>
				<div className='background-overlay'>
					<img className='logo' src={logo} />
					{this.props.children}
				</div>
			</div>
		)
	}
}

export default Background
