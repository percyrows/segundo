import React, { Component } from 'react'
import { ToastContainer} from 'react-toastify'

import Navbar from './navbar'


class Layout extends Component{

    render () {
        return (<div>
            <ToastContainer/>
            <Navbar />
            {
                this.props.children
            }
        </div>)
    }


}


export default Layout