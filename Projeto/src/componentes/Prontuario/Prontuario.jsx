import style from "./Prontuario.module.css";
import Navigation from "../navbar/Navigation";
import {FcFolder} from "react-icons/fc";
import React, {useState} from "react";
import Modal from "../Modal/Modal";



export default function Prontuario(){
    
     const[isOpen,setIsOpen]=useState(false);

   return (
    
     <div>
        <Navigation/>
       <div>
        
       
       </div>
       
        
        
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