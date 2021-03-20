import React, { Component } from 'react'
import './style.css';

export class Button extends Component {
	render() {
		return (
			<a style={this.props.style} onClick={this.props.onPress} className='button'>
				{this.props.text}
			</a>
		)
	}
}

export default Button
