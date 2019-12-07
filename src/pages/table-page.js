import React, {Component} from 'react'
import Table from '../components/table'
import api from '../config/api'
import {Link} from 'react-router-dom'
import {toast } from 'react-toastify'
import LoadingBar from 'react-top-loading-bar'

class TablePage extends Component{
    state ={
        users: [],
        loadingBarProgress: 0
    }

    componentDidMount = async () =>{
        await this.loadUsers()
    }

    loadUsers = async () =>{
        let {data} = await api.get('/users')
        this.setState({
            users: data
        })
    }

    handleDelete = (user) =>{
        let{
            users
        } =this.state
    let index = users.findIndex(l => user.id === l.id )
    users.splice(index, 1)

    this.setState({
        loadingBarProgress: 70
    })

    setTimeout(()=>{
        this.setState({
            users,
            loadingBarProgress:100
        })

    toast.error("Error Notification !", {
        position: toast.POSITION.TOP_LEFT
      })
    }, 500)
}



    render(){
        let{
            users, loadingBarProgress
        } = this.state

        return (<div>
            <LoadingBar
            progress={loadingBarProgress}
            height={3}
            color="blue"
            onLoaderFinished={this.onLoaderFinished}/>
            <Table 
            config={
            {              
                columns:[
                    { name: 'id', title: 'ID'},
                    { name: 'name', title: 'Nombre'},

                    {
                    name: 'firstname', 
                    title: 'Email',
                    formatter: ({username, email}) => {
                        return `${username} ${email}`}
                    },

                    {
                        
                    name: 'actions',
                    title: 'acciones',
                    formatter: (element) => {
                    return (
                        <div className="buttons">
                            <button 
                            onClick={
                                () => this.handleDelete(element)
                            }
                            className="button is-danger">
                            Eliminar
                            </button>

                    <Link className="button is-link"
                    to = {`/tabs/ ${element.id}/${element.name} }`}
                    >
                    Ver detalle
                    </Link>
                        </div>
                    )
                    }
                }
            ]
        }
    }
        data={users} 
            />
        </div>
        )
    }
}

export default TablePage