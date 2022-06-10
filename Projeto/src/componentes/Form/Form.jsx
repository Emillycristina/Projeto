import style from "./Form.module.css";
import Button from "../Button/Button";
import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { BsFillEyeFill, BsFillEyeSlashFill} from "react-icons/bs";
import {FaUserCircle } from "react-icons/fa";

export default function Form() {
    {

        const [email, setEmail] = useState("")
        const [password, setPassword] = useState("")
        const [show, setShow] = useState(false)
        //const [usuario, setUsuario] = useState([])
        //const {logged, setLogged} = useLogin()
        //const [sucesso, setSucesso] = useState('')
         
      
        const handleClick = (e) => {
          e.preventDefault();
          setShow(!show);
        };
      
       /*  useEffect(() => {
      
          fetch(import.meta.env.VITE_POST_CLIENT)
          .then((res) => res.json())
          .then((res) => setUsuario([...res.clientes]) )
        }, [])
      
       console.log(usuario)
        function fazerLogin() {
          const loginRealizado = usuario.filter(user => user.email_cliente === email && user.senha === password)
            if (loginRealizado.length > 0) {
              setLogged(true);
              setSucesso("Login realizado com sucesso!");
              setTimeout(() => {
                loginRealizado.pop()
                setSucesso("");
              }, 3000);
            } else {
              setLogged(false);
              setSucesso("E-mail e senha não coincidem");
              setTimeout(() => {
                setSucesso("");
              }, 3000);
            }
          }; */
      
 return (
    <div>
     <div className="Form">
      <div className={style.navBar}>
       <form className={style.Form}>
           <FaUserCircle className={style.userIcon}/>
           <h2>LOGIN</h2><br></br>
           <label><p>E-mail:</p></label>
           <input
            className={style.input}
            type="email"
            placeholder="usuario@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            /><br></br>
      
            <label><p>Senha:</p></label>
            <div className={style.divEye}>
            <input
             className={style.input}
             type={show ? "text" : "password"}
             placeholder="Digite sua senha"
             value={password}
             onChange={(e) => setPassword(e.target.value)}
            />
            <div className={style.loginEye}>
             {show ? (
              <BsFillEyeFill
                size="20px"
                className={style.Openeye}
                onClick={handleClick}
                />
                ) : (
              <BsFillEyeSlashFill
               size="20px"
               className={style.Openeye}
               onClick={handleClick}
                        />
              )}
             </div>
            </div>
      
     {/*  <p id={style.sucesso}>{sucesso}</p> */}
      
      <Button texto="Entrar" type="submit"  onClick={function (e) {e.preventDefault();
       fazerLogin();
       }}
      /><br></br><br></br>
      <div className={style.containerLink}>
        <Link style={{ textDecoration: "none", color:"white"}} to="/password">
        Esqueceu a senha?
        </Link>
        </div>
    </form>
  </div>
  </div>
</div>
  );
    }
}


