import *  as React from 'react';
import style from "./Folder.modules.css";
import Modal from "../Modal/Modal";
import {FcFolder} from "react-icons/fc";
import {useState} from "react";


export default function Situacao(){

    const[isOpen , setIsOpen]= useState(false);

    return (
        
      <div  style={{ marginLeft:"-50px", marginTop:"-86px", width:"800px", background:"white", height:"800px", borderRadius:"7px", paddingTop:"80px" , paddingLeft:"40px"}}>
       
        <FcFolder size="80" className={style.folder} onClick={() => setIsOpen(true)}/>
        <FcFolder size="80" className={style.folder} onClick={() => setIsOpen(true)}/>
        <FcFolder size="80" className={style.folder} onClick={() => setIsOpen(true)}/>
        <FcFolder size="80" className={style.folder} onClick={() => setIsOpen(true)}/>
        {isOpen && <Modal setIsOpen={setIsOpen} />}
        
        </div>
     
        
      

    );




  


}