import React, { Component } from 'react'
import Background from '../../components/Background'
import background from '../../assets/background.jpeg'

import Webcam from "react-webcam";
import Button from '../../components/Button';

import ClipLoader from "react-spinners/ClipLoader";

const videoConstraints = {
	facingMode: "user",
	width: 400,
	height: 400
};

export class login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoading: false
		}
		this.webcamRef = React.createRef();
	}

	takeScreenshot() {
		const base64 = this.refs.webcam.getScreenshot();
		this.setState({isLoading: true});
		fetch('https://c0a9d4e6b1d7.ngrok.io/api/welcome/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				'image': String(base64).replace('data:image/webp;base64', '')
			})
		})
		.then(r => r.json())
		.then(r => {
			this.setState({isLoading: false});

			const name = r['name'];
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
		})
	}

	render() {
		

		return (
			<Background>
				{ !this.state.isLoading ? <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}><Webcam style={{borderRadius: 10}} ref='webcam' audio={false} videoConstraints={videoConstraints} />
					<Button onPress={() => this.takeScreenshot()} style={{marginTop: 40}} text='Sign in to AudioActive Benz'/></div>
				: <ClipLoader color='white'/> }
			</Background>
		);
	}
}

export default login
