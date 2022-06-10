import style from "./Pagina404.modules.css";
import React from "react";
import { Link } from "react-router-dom";



export default function Pagina404() {
  
    return(
       <div className={style.divError}>
        <h1>Página não encontrada!</h1>
        <Link to="/login"><h6>Clique aqui para retornar ao login.</h6></Link>
        

       </div>
 )
 
}