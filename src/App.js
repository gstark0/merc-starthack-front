import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import './global.css';
import home from './pages/home';
import login from './pages/login';
import showroom from './pages/showroom';
import welcome from './pages/welcome';

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path='/home' component={home}/>
				<Route exact path='/login' component={login}/>
				<Route exact path='/showroom' component={showroom}/>
			</Switch>
		</Router>
	);
}

export default App;
