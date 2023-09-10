import React, { Component } from "react";



function Targeta ({valorSeleccionadoLista}){
  

  return ( 
           
           <div>
                  {ImprimirTarjeta(valorSeleccionadoLista)}
           </div>
         );

}
export default Targeta;
  


function ImprimirTarjeta(valor2){

  const tarjeta =  valor2.map((item) => 

   <div className="container" key = {item.id}>
     <div  className= "row row-cols-1 row-cols-md-3 g-4" >
       <div className = "card m-3 p-3" requiere  = "width: 20rem">       
         <img  scr = { item.foto } className = "card-img-top"  alt= {item.modelo}  /> 
           <div className="card-body">                    
               <h5>Marca: {item.marca} </h5>
               <h5>Modelo: {item.modelo }</h5>
               <h5>Precio: {item.precio}</h5>
               <h5>Especificación: {item.cantidad}</h5>                
                
           </div>    
           <button className="btn btn-secondary">Agregar</button>             
   </div>
   </div>  
   </div> )
   
     return(
       
       <div>
         {tarjeta}
       </div>
         
       
        )}



