import React, { Component } from 'react'
import Background from '../../components/Background'
import faceIcon from '../../assets/face.png'
import './style.css';
import { Link } from 'react-router-dom'

export class home extends Component {
	render() {
		return (
			<Background>
				<div className='main-text'>
					DISCOVER THE <span className='highlight'>NEW REALITY</span>
				</div>
				<Link to={'/login'} style={{marginTop: 40}}><img src={faceIcon} id='face-icon' /></Link>
			</Background>
		)
	}
}

export default home
