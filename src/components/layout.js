import React, { Component } from 'react'
import { ToastContainer} from 'react-toastify'

import Navbar from './navbar'


class Layout extends Component{

    render () {
        return (<div>
            <ToastContainer/>
            <Navbar />
            <div className="container container-main">
            {
                this.props.children
            }
            </div>
        </div>)
    }


}


export default Layout