import React, {Component} from 'react';
import './App.css';
import Home from './Components/Home';
import Products2 from './Components/Products2';
import Products4 from './Components/Products4.js';
import Products6 from './Components/Products6.js';
import ProductDtl from './Components/ProductDtl.js';
import Payment1 from './Components/Payment1.js';
import Payment2 from './Components/Payment2.js';
import Login1 from './Components/Login1.js';
import Login2 from './Components/Login2.js';
import Login3 from './Components/Login3.js';
import Cart1 from './Components/Cart1.js';
import Cart2 from './Components/Cart2.js';
import User1 from './Components/User1.js';
import User2 from './Components/User2.js';
import Menu1 from './Components/Menu1.js';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

class App extends Component{

	render(){
		return(
			<div>
				<Router>	
					<Switch>
						<Route path="/" exact component={Home}/>
						<Route path="/home" component={Home}/>
						<Route path="/products2" component={Products2}/>
						<Route path="/products4" component={Products4}/>
						<Route path="/products6" component={Products6}/>
						<Route path="/productdtl" component={ProductDtl}/>
						<Route path="/payment1" component={Payment1}/>
						<Route path="/payment2" component={Payment2}/>
						<Route path="/login1" component={Login1}/>
						<Route path="/login2" component={Login2}/>
						<Route path="/login3" component={Login3}/>
						<Route path="/cart1" component={Cart1}/>
						<Route path="/cart2" component={Cart2}/>
						<Route path="/user1" component={User1}/>
						<Route path="/user2" component={User2}/>
						<Route path="/menu1" component={Menu1}/>
					</Switch>
				</Router>
			</div>
		);
	}
}

export default App;
