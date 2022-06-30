import style from './password.modules.css'
//import { useState, useEffect } from "react";
import Button from "../Button/Button";
import { useState } from 'react';
import { BsFillEyeFill, BsFillEyeSlashFill} from "react-icons/bs";


export default function Password() {
   
    
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [show, setShow] = useState(false)

    const handleClick = (e) => {
       e.preventDefault();
       setShow(!show); 
   };
    
    return (
        <div>
          <form className="formulario">
                <h2>Recuperar Senha</h2><br></br>

                 <div className={style.inputDiv}>
                    
                    <label> Nova senha </label><br></br>
                    <input type={show ? "text" : "password"} 
                    name="pass" id="pass"  
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} />
                    {show ? (
                     <BsFillEyeFill 
                     size="20px"
                     className="eye"
                     onClick={handleClick}/> 
                      ) : ( 
                     <BsFillEyeSlashFill  
                     size="20px" 
                     className="eye"
                     onClick={handleClick} 
                      /> 
                     )}
                    <br></br>


                    <label> Confirmar senha </label><br></br>
                    <input type="password" 
                    name="confirm" id="confirm" 
                    value={confirmPassword} 
                    onChange={(e) => setConfirmPassword(e.target.value)} />
                    <br></br>
                    <Button 
                    texto='Confirmar'/>
                    </div>
                </form>
           </div>
    )
}

   



