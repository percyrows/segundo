import React, { Component } from 'react'

class Formularios extends React.Component{

clicked(){
    console.log('boton clickeado');
}

render (){
    return<div>
        <h1>Nombre</h1>
        <input type="text" placeholder="Nombre"/>
        <h1>Correo</h1>
        <input class="input is-success" type="text" placeholder="Text input" value="correo"/>
        <button onClick={this.clicked}>Boton</button>
        <div class="field"/>
        <div class="control"/>
        <label class="checkbox"/>
        <input type="checkbox"/>
            I agree to the <a href="terminos.js">terms and conditions</a>
        <div class="field"/>
        <div class="control"/>
        <label class="radio">
         <input type="radio" name="question"/>
         Yes
        </label>
        <label class="radio">
        <input type="radio" name="question"/>
         No
            </label>
        </div>
        

}
    }

export default Formularios
