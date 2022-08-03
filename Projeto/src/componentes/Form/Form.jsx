import style from "./Form.module.css";
import Button from "../Button/Button";
import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { BsFillEyeFill, BsFillEyeSlashFill} from "react-icons/bs";
import {FaUserCircle } from "react-icons/fa";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form"; 


export default function Form() {
    {

      const [email, setEmail] = useState("")
      const [password, setPassword] = useState("")
      const [show, setShow] = useState(false)
        
      const schema = yup.object().shape({
      email: yup.string().email().required(),
      senha: yup.string().required()
     


      })   
      
      const onSubmitHandler = (data) => {
        console.log({ data });
        reset();
      };
      
      
     const handleClick = (e) => {
         e.preventDefault();
         setShow(!show);
        };
      
        
      const  { register , handleSubmit, formState: { errors } }  =  useForm ( { 
          resolver : yupResolver (schema) , 
        } ) ; 
       

      
 return (
    <div>
     <div className="Form">
      <div className={style.navBar}>
       <form className={style.Form} onSubmit={handleSubmit(onSubmitHandler)}>
           <FaUserCircle className={style.userIcon}/>
           <h2>LOGIN</h2><br></br>
           <label><p>E-mail:</p></label>
           <input
             {...register('email')}
            className={style.input}
            type="email"
            placeholder="usuario@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            /><br></br>
      
            <label><p>Senha:</p></label>
            <div className={style.divEye}>
            <input
              {...register('senha')}
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
      
     
      
      <Button texto="Entrar" type="submit"  /><br></br><br></br>
      
      <div className={style.containerLink}>
        <Link style={{ textDecoration: "none", color:"white"}} to="/EnvEmail">
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


