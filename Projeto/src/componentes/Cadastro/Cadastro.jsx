import style from "./Cadastro.modules.css";
import Button from "../Button/Button";
import { useState } from "react";
import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BsFillEyeFill, BsFillEyeSlashFill} from "react-icons/bs";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form"; 


export default function Cadastro() {
   
   const [password, setPassword] = useState('')
   const [nome, setNome] = useState('')
   const [cpf, setCpf] = useState('')
   const [matricula, setMatricula] = useState('')
   const [email, setEmail] = useState('')
   const [display,setDisplay] = useState('none')
   const [confirmPassword, setConfirmPassword] = useState ('')
   const [aviso, setAviso] = useState ('')

   const [show, setShow] = useState(false)

   const cpfNumber = /^[0-9]{3}.?[0-9]{3}.?[0-9]{3}-?[0-9]{2}$/;
   const passwordNumber = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8}$/;


const schema = yup.object().shape ({
    nome: yup.string().required().min(3,"Nome está pequeno"),
    cpf:  yup.string().required().matches( cpfNumber ),
    email: yup.string().email().required(),
    password: yup.string().required().matches(passwordNumber , "A senha deve conter no mínimo 8 caracteres.Uma letra minúscula e uma letra maiúscula e um caracter especial" ),
    confirmPassword: yup.string().required()
    .oneOf([yup.ref('password'), null], "As senhas precisam ser iguais"),
    matricula: yup.number().required().min(5, "Matrícula deve posuir 5 dígitos")



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

 
 return(
         
      <div>
          
       <form  onSubmit={handleSubmit(onSubmitHandler)}>
          <Link to="/login" style={{textDecoration:"none"}}><h4>Login<FaUserCircle size="19px"/></h4></Link><br></br>
          <hr></hr><br></br>
          <FaUserCircle size="80px" color="grey"  />
        

          <label><h3>CADASTRO</h3></label><br></br>

          <label> Nome:</label><br></br>
          <input type="text"   {...register('name')} placeholder="Digite seu nome" /* onChange={(e) => setNome(e.target.value)} *//><br></br><br></br>
          <p>{errors.nome?.message}</p>

          <label> CPF:</label><br></br>
          <input type="text" {...register('cpf')}  placeholder="Digite seu cpf" /* onChange={(e) => setCpf(e.target.value)}  *//><br></br><br></br>
          <p style={{color:"red", size:"10px"}}>{errors.cpf?.message}</p>

          <label> E-mail:</label><br></br>
          <input type="text"  {...register('email')}  placeholder="Digite seu e-mail" /* onChange={(e) => setEmail(e.target.value)} */ /><br></br><br></br>
          <p>{errors.email?.message}</p>

          <label> Senha:</label><br></br>
          <input   {...register('password')} 
          placeholder="Digite sua senha"
          type={show ? "text" : "password"} 
          value={password} 
          onChange={(e) => setPassword(e.target.value)}/><br></br>
          <div>
          {show ? (
          <BsFillEyeFill 
          size="20px"
          className="Eye"
          onClick={handleClick}
          /> 
          ) : ( 
          <BsFillEyeSlashFill  
          size="20px" 
          className="Eye"
          onClick={handleClick} 
         /> 
          )}
          <p>{errors.password?.message}</p>
          </div><br />

          <label> Confirme sua Senha:</label><br></br>
          <input {...register('confirmPassword')} 
          type="password"
          value={confirmPassword} 
          onChange={(e) => confirmaSenha(e)}/><br></br>
          <p>{errors.confirPassword?.message}</p>

      
         
          <div>
         
        
         <br></br>
         <p style={{display: display, color:"red", MarginTop:"2px", marginBottom:"5px"}}> {aviso} </p>
        
          </div>
          
          
          <label> Matrícula:</label><br></br>
          <input type="text" {...register('matricula')}  className="inputM" placeholder="Digite sua matricula" /* onChange={(e) => setMatricula(e.target.value)} *//><br></br><br></br>
          <p>{errors.matricula?.message}</p>


         <Button texto="Cadastrar"  type="submit"
          
          />

       </form>

      </div>



   );
  }
