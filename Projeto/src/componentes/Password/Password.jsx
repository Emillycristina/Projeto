import style from './Password.modules.css'
import { useState, useEffect } from "react";
import Button from "../Button/Button";

export default function Password (){
    //const [usuarios, setUsuarios] = useState([])
    const [email, setEmail] = useState('')
    //const [sucess, setSucess] = useState('')
    const [password, setPassword] = useState('')
    //const [display, setDisplay] = useState(false)
    const [confirmPassword, setConfirmPassword] = useState('')
  //  const [userObj, setUserObj] = useState([])

    return (
        <div>
          <form>
                <h1>Esqueceu a senha?</h1>

                 <div className={style.inputDiv}>
                    <label> E-mail </label>
                    <input placeholder="usuario@email.com" type="text" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />

                  {/*  <div className={display ? style.showInput : style.hideInput}> */}
                    <div>
                    <label> Nova senha </label>
                    <input type="password" name="pass" id="pass"  value={password} onChange={(e) => setPassword(e.target.value)} />

                    <label> Confirmar senha </label>
                    <input type="password" name="confirm" id="confirm" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                    <Button onClick={function(e){
                        e.preventDefault()
                        trocaSenha()
                    }}texto='Confirmar'/>
                    </div>
                </div>
               <p className={style.sucess}>{sucess}</p>
                <Button display={display?'none':'flex'} 
                onClick={function (e) {
                    e.preventDefault()
                    verificaEmail()
                }}
                texto='Verificar e-mail'/>
            </form>
        </div>
    )
}

   



