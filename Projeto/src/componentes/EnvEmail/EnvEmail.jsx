import style from "./EnvEmail.module.css";
//import { useState, useEffect } from "react";
import Button from "../Button/Button";
import { useState } from 'react';


export default function EnvEmail() {
   
    const [email, setEmail] = useState("")
    
    return (
        <div>
          <form className={style.formEnv}>
                <h2>Esqueceu a senha?</h2><br></br>
                <hr></hr><br></br>
                <p><i>Digite seu email para recuperar a senha.</i></p><br></br>

                <div>
                    <label> E-mail </label><br></br>
                    <input placeholder="usuario@email.com" type="text" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}
                     />
                </div> 
                <Button texto="Enviar" />
        </form>
      </div>   
       
   
  ) 
 
 }