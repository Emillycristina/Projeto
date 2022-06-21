import style from './Password.modules.css'
//import { useState, useEffect } from "react";
import Button from "../Button/Button";

export default function Password() {
   
    
    
    return (
        <div>
          <form>
                <h1>Esqueceu a senha?</h1>

                 <div className={style.inputDiv}>
                    <label> E-mail </label>
                    <input placeholder="usuario@email.com" type="text" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />

              
                    <div>
                    <label> Nova senha </label>
                    <input type="password" name="pass" id="pass"  value={password} onChange={(e) => setPassword(e.target.value)} />

                    <label> Confirmar senha </label>
                    <input type="password" name="confirm" id="confirm" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                    <Button 
                    texto='Confirmar'/>
                    </div>
                </div>
               <p className={style.sucess}>{sucess}</p>
                <Button display={display ?'none':'flex'} 
                texto='Verificar e-mail'/>
            </form>
        </div>
    )
}

   



