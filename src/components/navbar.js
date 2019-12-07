import React, { Component} from 'react'
import {Link} from 'react-router-dom'

class Navbar extends Component{
    state ={
        collapesed: false
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
               <nav className="navbar is-dark is-fixed-top" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <Link className="navbar-item" to="/">
              <img src='atom-logo-white.png' width="120" height="80"/>
            </Link>
      
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
        )
    }
}

export default Navbar