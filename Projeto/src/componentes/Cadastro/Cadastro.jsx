import style from "./Cadastro.modules.css";
import Button from "../Button/Button";
import { useState } from "react";
import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BsFillEyeFill, BsFillEyeSlashFill} from "react-icons/bs";


export default function Cadastro() {
   
   const [password, setPassword] = useState("")
   const [nome, setNome] = useState("")
   const [cpf, setCpf] = useState("")
   const [matricula, setMatricula] = useState("")
   const [email, setEmail] = useState("")
   const [display,setDisplay] = useState("none")
   const [confirmPassword, setConfirmPassword] = useState ("")
   const [aviso, setAviso] = useState ("")

   const [show, setShow] = useState(false)

  function timeOut(){
    setTimeout(() => {
      setDisplay('none')
      setAviso('')
    }, 2000)
  }
 
 

   const handleClick = (e) => {
      e.preventDefault();
      setShow(!show); 
  };
 
   const validaSenha = (password) =>
   {
     const reg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,15}$/;
     if (reg.test(password)){
      return true; 
      }
      else{
      return false;
      }
    
  }
  validaSenha()

 
 const validaConfirmSenha = (confirmPassword) =>
 {
  const reg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,15}$/;
  if (reg.test(confirmPassword)){
    return true; 
    }
    else{
    return false;
    }

 }
validaConfirmSenha()
 

const confirmaSenha = (e) =>{
    if(password.includes(e.target.value)){
    setConfirmPassword(e.target.value)
    setDisplay('none')
   }else{
    setConfirmPassword(e.target.value)
    setDisplay('flex')
    setAviso('As senhas precisam ser iguais')
    
   }
}
  

 const validarEmail = (email) =>
  {
  let reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
  if (reg.test(email)){
  return true; 
 } else{
  return false;
   }
 } 
 validarEmail();

const validaCpf = (cpf) =>{
   const reg = /^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2})|([0-9]{11}))$/;
   if (reg.test(cpf)){
    return true; 
   } else{
    return false;
     }
}
validaCpf();

const cadastraUsuario = (validarEmail, validaSenha, validaCpf) => {
   
   if(validarEmail(email) === false){
     setDisplay('flex')
     setAviso ('Insira um e-mail válido!')
     timeOut()
  } else if(nome.length <= 3 ){
     setDisplay('flex')
     setAviso ('Nome deve possuir mais que 3 caracteres!')
     timeOut()  
   } else if (validaSenha(password)=== false){
     setDisplay('flex')
     setAviso ('Senha deve possuir no mínimo 8 caracteres, uma letra maiúscula, uma letra minúscula e um caractere especial!')
     timeOut()  
  } else if (matricula.length === 5){
     setDisplay('flex')
     setAviso ('A matrícula deve ter 5 números!')
      
  }else if(validaCpf(cpf) === false ) {
      setDisplay('flex')
      setAviso(' Digite um cpf válido!')
   }   else{
    console.log('dados corretos')
   }
   cadastraUsuario()
  }


   
 
  
  return(
         
      <div>
          
       <form>
          <Link to="/login" style={{textDecoration:"none"}}><h4>Login<FaUserCircle size="19px"/></h4></Link><br></br>
          <hr></hr><br></br>
          <FaUserCircle size="80px" color="grey"  />
        

          <label><h3>CADASTRO</h3></label><br></br>

          <label> Nome:</label><br></br>
          <input type="text"  id="nome" value={nome} placeholder="Digite seu nome" onChange={(e) => setNome(e.target.value)}/><br></br><br></br>

          <label> CPF:</label><br></br>
          <input type="text"  id="cpf"  value={cpf} placeholder="Digite seu cpf" onChange={(e) => setCpf(e.target.value)} /><br></br><br></br>

          <label> E-mail:</label><br></br>
          <input type="text"  id="email" value={email} placeholder="Digite seu e-mail" onChange={(e) => setEmail(e.target.value)} /><br></br><br></br>
       

          <label> Senha:</label><br></br>
          <input   
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
          </div><br />

          <label> Confirme sua Senha:</label><br></br>
          <input  id="confirmSenha"
          type={"password"} 
          value={confirmPassword} 
          onChange={(e) => confirmaSenha(e)}/><br></br>
      
         
          <div>
         
        
         <br></br>
         <p style={{display: display, color:"red", MarginTop:"2px", marginBottom:"5px"}}> {aviso} </p>
          </div>
          
          <label> Matrícula:</label><br></br>
          <input type="text" id="matricula" value={matricula} className="inputM" placeholder="Digite sua matricula" onChange={(e) => setMatricula(e.target.value)}/><br></br><br></br>
           

         <Button texto="Cadastrar"  type="button"
          onSubmit={function(e){
          e.preventDefautl()
          this.cadastraUsuario() }}
          />

       </form>

      </div>



   );
  }
