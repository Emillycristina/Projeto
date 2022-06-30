import style from "./Prontuario.module.css";
import Navigation from "../navbar/Navigation";
import {FcFolder} from "react-icons/fc";
import React, {useState} from "react";
import Modal from "../Modal/Modal";
import Tabela2 from "../Tabela2/Tabela2";



export default function Prontuario(){
    
     const[isOpen,setIsOpen]=useState(false);

   return (
    
     <div>
        <Navigation/>
       <div>
       <Tabela2/>
       
       </div>
       <br></br>
        
       <hr></hr>
       <div className={style.FcFolder}>
       <FcFolder size="80" className={style.folder} onClick={() => setIsOpen(true)}/>
       <FcFolder size="80" className={style.folder} onClick={() => setIsOpen(true)}/>
       <FcFolder size="80" className={style.folder} onClick={() => setIsOpen(true)}/>
       <FcFolder size="80" className={style.folder} onClick={() => setIsOpen(true)}/>
       {isOpen && <Modal setIsOpen={setIsOpen} />}
       </div>
       
        
    
      </div> 

     
    
     
    )



  

}