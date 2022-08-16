import *  as React from 'react';
import style from "./Folder.modules.css";
import Modal from "../Modal/Modal";
import {FcFolder} from "react-icons/fc";
import {useState} from "react";
import MediaQueryReact from 'media-query-react';


export default function Situacao(){

    const[isOpen , setIsOpen]= useState(false);
    
    const screenSize = {
      mobile: { 
        minWidth: 320,
        maxWidth: 480,
      },
      mobileLandscape: {
        minWidth: 481,
        maxWidth: 767,
      },
      tablet: {
        minWidth: 768,
        maxWidth: 1024,
      },
      desktop: {
        minWidth: 1025,
        maxWidth: 2500,
      },
    };

    return (
      <MediaQueryReact mediaQueries={screenSize}>
       <div style={{background:"white", width: "100hv", marginTop:"90px", marginLeft:"60px", paddingBottom:"800px", borderRadius:"10px"}}
    
       
   
      >
        <FcFolder size="80" style={{cursor:"pointer"}} onClick={() => setIsOpen(true)}/>
        <FcFolder size="80" style={{cursor:"pointer"}} onClick={() => setIsOpen(true)}/>
        <FcFolder size="80" style={{cursor:"pointer"}} onClick={() => setIsOpen(true)}/>
        <FcFolder size="80" style={{cursor:"pointer"}} onClick={() => setIsOpen(true)}/>
        {isOpen && <Modal setIsOpen={setIsOpen} />}
        
        </div>
     
      </MediaQueryReact>
      

    );




  


}