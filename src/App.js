import React, { Component } from 'react';

import {
  BrowserRouter as Router, //enrutador
  Switch, // navegacion entre rutas
  Route, //ruta
  Link // componente href
} from 'react-router-dom'

//pages

import TablePage from './pages/table-page'
import ModalPage from './pages/modal-page'
import TabsPage from  './pages/tabs-page'



class App extends Component {

  state = {
    collapsed: false 
	}
	
	handleMenu =() => {
		this.setState((prevState) => {
			return{
				collapsed: !prevState.collapsed
			}
		})
	}
  render(){
    let {
      collapsed
    } = this.state
    return(
      <div className="container">
  
          <Router>
            <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <a className="navbar-item" href="index.js">
              <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"/>
            </a>
      
						<a role="button" 
						onClick={this.handleMenu}
						className="navbar-burger burger" 
						aria-label="menu" 
						aria-expanded="false" 
						data-target="navbarBasicExample">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
      
        <div id="navbarBasicExample" 
        className={`navbar-menu ${collapsed ? 'is-active' : '' }`}>
          <div className="navbar-start">
          <Link to= "/" className="navbar-item">
                    Tabla
                  </Link>
                  <Link to= "/modal" className="navbar-item">
                    Modal
                  </Link>
                  <Link to= "/tabs" className="navbar-item">
                    Tabs
                  </Link>
          </div>
      
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="button is-primary">
                  <strong>Sign up</strong>
                </a>
                <a className="button is-light">
                  Log in
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
      
            
            <Switch>
              <Route path="/" exact>
                <TablePage />
              </Route>
              <Route path="/modal" exact>
                <ModalPage />
              </Route>
              <Route path="/tabs" exact>
                <TabsPage />
              </Route>
            </Switch>
          </Router>  
        </div>
      
    )
  }
}


export default App;
