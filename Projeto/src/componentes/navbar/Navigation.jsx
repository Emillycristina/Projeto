import style from "./navBar.module.css"
import { Link } from "react-router-dom";
import Button from "../Button/Button";


export default function Navigation() {
    return (
      <nav className={style.navigation}>
        <div className={style.brand}>
        <input type="text" className={style.pesquisa} placeholder=" Digite o CPF que deseja encontrar..."> 
        </input>
         
         <Button texto="Pesquisar" type="submit" className="button"/>
         </div>
         <div className={style.divlinks}>
         <Link to="/Home" className={style.Link}> Home |</Link><br></br>
         <Link to="/Login" className={style.Link}>Login |</Link>
        </div>

       
      </nav>
    );
  }