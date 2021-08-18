import React from 'react' ;
import ReactDOM from 'react-dom' ;
import './index.css' ;
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {Homepage, Productpage,Orderpage,Contactpage,Donatepage} from './App';

ReactDOM.render(
    <Router>
       <Switch>
		      <Route exact path="/" component={Homepage}/>
			    <Route exact path="/Product" component={Productpage}/>
          <Route exact path="/Order" component={Orderpage}/>
          <Route exact path="/Contact" component={Contactpage}/>
          <Route exact path="/Donate" component={Donatepage}/>
	    </Switch>
    </Router>,
    document.getElementById('root')
);

