
import './App.css';
import "./Estilos/Cards.css";
import BotonCarrito from './Componentes/Carrito';
import Navegador from './Componentes/Navegador';
import Footer from './Componentes/Footer';
import Etiquetas from './Componentes/Cards';
import ConstructorProductos from './Constructor/Constructor';
import React from 'react';



function App() {

  return (
    <div className="App">
     <h1 className='titulo'>BIKESTWOGO</h1>      

<div>
  <BotonCarrito className="Carrito"></BotonCarrito>
</div>

<div className="Navegador">
  
  <Navegador texto={"Inicio"}></Navegador>    
  <Navegador texto={"Bicicletas"} ></Navegador>
  <Navegador texto={"Componentes"}></Navegador>
  <Navegador texto={"Accesorios"}></Navegador>
  <Navegador texto={"Portafolio"}></Navegador>
  <Navegador texto={"Servicios"}></Navegador>
  <Navegador texto={"Contacto"}></Navegador>
  
</div> 

<div className ='Tarjeta'>
 
 <ConstructorProductos valorSeleccionadoLista = ""></ConstructorProductos>
 
</div>

<div className='Cards'>
  <Etiquetas></Etiquetas>
  <Etiquetas></Etiquetas>
</div>

<div>
  <Footer></Footer>
  { React.createElement("div",{ className:"Tarjeta"},"Imprimiendo mensaje")}
</div>
    </div>
  );
}

export default App;
