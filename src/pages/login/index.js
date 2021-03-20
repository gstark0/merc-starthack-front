import React, { Component } from 'react'
import Background from '../../components/Background'
import background from '../../assets/background.jpeg'

import Webcam from "react-webcam";
import Button from '../../components/Button';

const videoConstraints = {
	facingMode: "user",
	width: 400,
	height: 400
};

export class login extends Component {
	constructor(props) {
		super(props);
		this.webcamRef = React.createRef();
	}

	takeScreenshot() {
		const base64 = this.refs.webcam.getScreenshot();

		const name = "";
		let text = "";

		if(name.length == 0) {
			text = "Our customer service was notified about your presence. One of our employees will come to you as quick as possible. Please take a sit in the waiting room.";
		} else {
			text = "Welcome back " + name + "! One of our employees will come to you as quick as possible. Please take a sit in the waiting room.";
		}

		let speaker = new SpeechSynthesisUtterance();
		speaker.text = text;
		window.speechSynthesis.speak(speaker);

		alert(text);
		window.location.href = '/home';
	}

	render() {
		

		return (
			<Background>
				<Webcam style={{borderRadius: 10}} ref='webcam' audio={false} videoConstraints={videoConstraints} />
				<Button onPress={() => this.takeScreenshot()} style={{marginTop: 40}} text='Sign in to AudioActive Benz'/>
			</Background>
		);
	}
}

export default login
