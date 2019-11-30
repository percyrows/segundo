import React, {Component} from 'react'
import Tabs from '../components/tabs'

class TabsPage extends Component {
    render (){

        let tabs= [
            {
                id : 'introduccion',
                label: 'Introducción',
                content :
                <div>
                    Texto intro
                </div>
            },
            {
                id: 'profile',
                label: 'perfil',
                content :
                <div>
                    Perfil Usuario
                </div>
            },
        ]

    return (
        <div>
            <Tabs 
            tabs = {tabs}
        />
        </div>
    );
}
}


export default TabsPage