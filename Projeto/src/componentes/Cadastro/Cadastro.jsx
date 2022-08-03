import style from "./Cadastro.modules.css";
import Button from "../Button/Button";
import { useState } from "react";
import React from "react";
import { FaUserCircle } from "react-icons/fa";
import {  MdOutlineError } from "react-icons/md";
import { Link } from "react-router-dom";
import { BsFillEyeFill, BsFillEyeSlashFill} from "react-icons/bs";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form"; 



export default function Cadastro() {
   
   const [password, setPassword] = useState('')
   const [show, setShow] = useState(false)

   const cpfNumber = /^[0-9]{3}.?[0-9]{3}.?[0-9]{3}-?[0-9]{2}$/;
   const passwordNumber = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,10})/;
   



const schema = yup.object().shape ({
    nome: yup
    .string()
    .required("Nome é um campo obrigatório!")
    .min(3, "É necessário ao menos 3 caracteres!")
    .max(40, "Máximo de 40 caracteres"),
    cpf:  yup
    .string()
    .required("Cpf é um campo obrigatório!")
    .matches( cpfNumber, "Cpf deve possuir 11 caracteres numéricos!" ),
    email: yup
    .string()
    .email("email inválido!")
    .required("email é um campo obrigatório!"),
    password: yup
    .string()
    .required("Senha é um campo obrigatório!")
    .min(8, "A senha deve conter no mínimo 8 caracteres")
    .matches(passwordNumber , "A senha deve conter no mínimo 8 caracteres.Uma letra minúscula e uma letra maiúscula e um caracter especial" ),
    confirmPassword: yup
    .string()
    .required("Por favor confirme sua senha!")
    .oneOf([yup.ref('password'), null], "As senhas precisam ser iguais"),
    matricula: yup
    .number( "Matricula deve ser uma sequência de 5 números!")
    .required("Matrícula é um campo obrigatório").min(5, "Matrícula deve posuir 5 dígitos").max(5, "Matrícula deve posuir 5 dígitos")



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
          <input type="text"   {...register('name')} placeholder="Digite seu nome" /><br></br>
          <p style={{color:"red", size:"7px"}}>{errors.nome?.message}</p>

          <label> CPF:</label><br></br>
          <input type="text" {...register('cpf')}  placeholder="Digite seu cpf"/><br></br>
          <p style={{color:"red", size:"7px"}}>{errors.cpf?.message}</p>

          <label> E-mail:</label><br></br>
          <input type="text"  {...register('email')}  placeholder="Digite seu e-mail"  /><br></br>
          <p style={{color:"red", size:"7px"}}>{errors.email?.message}</p>

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
          <p style={{color:"red", size:"7px"}}>{errors.password?.message}</p>
          </div><br />

          <label> Confirme sua Senha:</label><br></br>
          <input {...register('confirmPassword')} 
          type="password"
           
          
          />
          <br></br>
          <p style={{color:"red", size:"7px"}}>{errors.confirmPassword?.message}</p>

      
         
          <div>
         
        
         <br></br>
         
        
          </div>
          
          
          <label> Matrícula:</label><br></br>
          <input type="text" {...register('matricula')}  
          className="inputM" placeholder="Digite sua matricula" 
          defaultValue={0}/><br></br><br></br>
          <p style={{color:"red", size:"7px"}}>{errors.matricula?.message}</p>


         <Button texto="Cadastrar"  type="submit"
          
          />


         
       </form>

      </div>



   );
  }

 