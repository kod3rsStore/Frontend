import React, {Component} from 'react';
import './App.css';
import Home from './Components/Home.js';

import Products2 from './Components/Products2.js';

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
import cardProduct from './Components/productCardList.jsx';
import listProducts from './Containers/listProducts.jsx';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

class App extends Component{

	render(){
		return(
			<div>
				<div className="hdr">
					<div className="hd"><a href="https://twitter.com"><img src="/img/menuLgt.png" className="icon" alt="twitter" /></a></div>
					<div className=""><img id="logo" src="/img/logo1.png" alt=""/></div>
					<a href="https://google.com" className="hdh">Home</a>
					<a href="https://google.com" className="hdh">Login</a>
					<a href="https://google.com" className="hdh">Dark</a>
					<a href="https://google.com" className="hdh">Profile</a>
					<div className=""><img id="logo" src="/img/cartLgt1.png" alt="" /></div>
					<div className="hd1">
						<div className="wrapper"> 
							<div className="searchbtn"><img id="glass" src="/img/glass.png" alt=""/></div>
							<div><input type="text" className="input" placeholder="Buscar" /></div>
						</div>
					</div>
				</div>
				<Router>	
					<Switch>
						<Route path="/" exact component={Home}/>
						<Route path="/home" component={Home}/>
						<Route path="/cardproduct" component={cardProduct} />
						<Route path="/cardProductList" component={listProducts} />
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
