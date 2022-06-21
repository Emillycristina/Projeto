import style from "./navBar.module.css"
import { Link } from "react-router-dom";
import { BsSearch  } from "react-icons/bs";
import {FaUserCircle } from "react-icons/fa";
import { AiFillHome  } from "react-icons/ai";

export default function Navigation() {
    return (
  
    <nav className={style.navigation}>
    <div className={style.container}>
      <div className={style.left}>
        <input type="text" className={style.pesquisar} placeholder=" Digite o CPF que deseja encontrar..."> 
        </input>
        <button type="submit" className={style.botao}><BsSearch className={style.lupa}/></button>
       </div>
     <div className={style.right}></div>
    </div>
        <div className={style.divlinks}>
        <Link to="/Home" style={{textDecoration:"none"}} className={style.Link}> Home <AiFillHome className={style.home}/> </Link><br></br>
        <Link to="/Login"  style={{textDecoration:"none"}} className={style.Link}>Login <FaUserCircle className={style.user}/></Link>
        </div>

       
      </nav>
    );
  }