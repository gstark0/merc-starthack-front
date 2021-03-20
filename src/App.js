import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import './global.css';
import home from './pages/home';
import welcome from './pages/welcome';

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path='/home' component={home}/>
				<Route exact path='/welcome' component={welcome}/>
			</Switch>
		</Router>
	);
}

export default App;
