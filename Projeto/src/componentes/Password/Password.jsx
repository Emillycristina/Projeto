import style from './password.modules.css'
//import { useState, useEffect } from "react";
import Button from "../Button/Button";
import { useState } from 'react';


export default function Password() {
   
    
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    
    return (
        <div>
          <form className="formulario">
                <h2>Recuperar Senha</h2><br></br>

                 <div className={style.inputDiv}>
                    
                    <label> Nova senha </label><br></br>
                    <input type="password"
                    name="pass" id="pass"  
                    value={password} onChange={(e) => setPassword(e.target.value)} />
                    <br></br><br></br>

                    <label> Confirmar senha </label><br></br>
                    <input type="password" 
                    name="confirm" id="confirm" 
                    value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                    <br></br>
                    <Button 
                    texto='Confirmar'/>
                    </div>
                </form>
           </div>
    )
}

   



