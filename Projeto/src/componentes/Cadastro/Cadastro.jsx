import style from "./Cadastro.modules.css";
import React from "react";
import Button from "../Button/Button";
import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BsFillEyeFill, BsFillEyeSlashFill} from "react-icons/bs";


export default function Cadastro() {
   {
   const [password, setPassword] = useState("")
   const [show, setShow] = useState(false)

   const handleClick = (e) => {
      e.preventDefault();
      setShow(!show); 
  };

   
   return(
         
      <div>
          
       <form>
          <Link to="/login" style={{textDecoration:"none"}}><h4>Login<FaUserCircle size="19px"/></h4></Link><br></br>
          <hr></hr><br></br>
          <FaUserCircle size="80px" color="grey"  />
        

          <label><h3>CADASTRO</h3></label><br></br>

          <label> Nome:</label><br></br>
          <input type="text"  id="nome"  placeholder="Digite seu nome"/><br></br><br></br>

          <label> CPF:</label><br></br>
          <input type="text"  id="cpf"  placeholder="Digite seu cpf"/><br></br><br></br>

          <label> E-mail:</label><br></br>
          <input type="text"  id="email"  placeholder="Digite seu e-mail"/><br></br><br></br>
         
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
          )} <br></br>
          </div>
          
          <label> Matrícula:</label><br></br>
          <input type="text" id="matricula"  className="inputM" placeholder="Digite sua matricula"/><br></br><br></br>
           

         <Button texto="Criar" id="button" type="submit"/>
       </form>

      </div>



   );
  }
} 