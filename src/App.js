import React, { Component } from 'react';

import {
  BrowserRouter as Router, //enrutador
  Switch, // navegacion entre rutas
  Route, //ruta
  Link // componente href
} from 'react-router-dom'


import Layout from './components/layout'

import TablePage from './pages/table-page'
import ModalPage from './pages/modal-page'
import TabsPage from  './pages/tabs-page'
import 'react-toastify/dist/ReactToastify.css'

class App extends Component {

  render(){
    return(
      <div className="container">
  
          <Router>
            
            <Layout>
            
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

            </Layout>

          </Router>  
        </div>
      
    )
  }
}


export default App;
