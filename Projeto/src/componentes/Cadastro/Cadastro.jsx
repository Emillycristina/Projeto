import style from "./Cadastro.modules.css";
import React from "react";
import Button from "../Button/Button";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BsFillEyeFill, BsFillEyeSlashFill} from "react-icons/bs";

export default function Cadastro() {
   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")
   const [show, setShow] = useState(false)

   const handleClick = (e) =>{
      e.preventDefault();
      setShow(!show);
   };

   
   return(
         
      <div>
          
       <form>
          <Link to="/login"><h4>Login |</h4></Link><br></br>
          <FaUserCircle size="80px" color="grey"  />
          
          <label><h3>CADASTRO</h3></label><br></br>

          <label> Nome:</label><br></br>
          <input type="text"  id="nome"  placeholder="Digite seu nome"/><br></br><br></br>

          <label> CPF:</label><br></br>
          <input type="text"  id="cpf"  placeholder="Digite seu cpf"/><br></br><br></br>

          <label> E-mail:</label><br></br>
          <input type="text"  id="email"  placeholder="Digite seu e-mail"/><br></br><br></br>
         
          <label> Senha:</label><br></br>
          <input   id="senha"  placeholder="Digite sua senha"
          type={show ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)}/><br></br><br></br>
          <div className={style.loginEye}>
          {show ? (<BsFillEyeFill size="20px" className={style.Openeye} onClick={handleClick}/> 
          ) : ( <BsFillEyeSlashFill  size="20px" className={style.Openeye} onClick={handleClick} 
          /> )}
          </div>

          <label> Confirme sua Senha:</label><br></br>
          <input type="text"  id="confirmSenha"  placeholder="Confirme sua senha"/><br></br><br></br>

          
          <label> Matrícula:</label><br></br>
          <input type="text" id="matricula"  placeholder="Digite sua matricula"/><br></br><br></br>
           

         <Button texto="Criar" id="button"/>
       </form>

      </div>



   )

}