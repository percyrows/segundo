import React, {Component, Fragment} from 'react'
import Modal from '../components/modal'


class ModalPage extends Component{
    state ={
        classNameModal: ' '
    }

    showModal =() =>{
        this.setState({
            classNameModal: 'is-active'
        })
    }

    hideModal =() =>{
        this.setState({
            classNameModal: ''
        })
    }
    render(){
        let{
            classNameModal
        } = this.state

        return (
            <div>

                <button 
                onClick={this.showModal}
                className="button is-success">
                    Mostrar
                </button>

                { /* <button className="button is-">
                    Ocultar </button> */ }

                <Modal
                title="Hola"
                onClose={this.hideModal}
                className={classNameModal}
                buttonsFooter={
                    <Fragment>
                       <button 
                    onClick={this.hideModal}
                    className="button is-success">
                        
                        Save
                        </button>
                   {/* <button 
                    onClick={this.hideModal}
                    className="button is-danger">
                        Cancel
                   </button> */}
                    </Fragment>
                }>
               
                <div>
                    <h1 className="title is-1">
                        Componente de modal
                    </h1>
                    </div>
                </Modal>
            </div>
        )
    }
}

export default ModalPage