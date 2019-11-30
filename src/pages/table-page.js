import React, {Component} from 'react'
import Table from '../components/table'
import api from '../config/api'

class TablePage extends Component{
    state ={
        users: []
    }

    componentDidMount = async () =>{
        await this.loadUsers()
    }

    loadUsers = async () =>{
        let {data} = await api.get('/users')
        this.setState({
            users: data
        })
        console.log(data)
    }

    handleDelete = (user) =>{
        let{
            users
        } =this.state
    let index = users.findIndex(l => user.id === l.id )
    users.splice(index, 1)

    this.setState({
        users: users
    })

}



    render(){
        let{
            users
        } = this.state

        return (<div>
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
                            return <button 
                            onClick={
                                () => this.handleDelete(element)
                            }
                            className="button is-danger">
                            Eliminar
                            </button>
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