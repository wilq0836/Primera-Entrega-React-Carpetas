import React from "react";
import ListaDesplegable from "./ListaDesplegable";


function Navegador (props){

    return (
        <div>
            <div className="navegador" >
            <nav  className="navbar navbar-expand-lg ">
                <div  className="dropdown">                              
                    <lu   href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">{props.texto}   
                     </lu> 
                     <ListaDesplegable texto = {props.texto} ></ListaDesplegable>
                     
                 </div> 
                 
            </nav>

        </div> 
         
        </div>
    )
}

export default Navegador;