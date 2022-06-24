import style from "./modal.module.css";
import React, {useState} from "react";
import {AiOutlineClose,AiOutlineUpload, AiOutlineDownload} from "react-icons/ai";



const Modal = ({setIsOpen}) => {
 
   
  return (
  <div>
     
   <div className={style.darkBG} onClick={() => setIsOpen(false)}/>
   <div className={style.centered}>
        <div className={style.modal}>
          <div className={style.modalHeader}>
            <h5 className={style.heading}>Tipo de Doc</h5>
            <hr></hr>
          </div>
          <button className={style.closeBtn} onClick={() => setIsOpen(false)}>
              <AiOutlineClose style={{marginBottom:"-3px"}} />
          </button>
          <div className={style.modalContent}>
       
          </div>
         
          <div className={style.modalActions}>
         
            <div className={style.actionsContainer}>
            
            <button type="submit" className={style.upBtn} onClick={() => setIsOpen(true)}>
            <AiOutlineUpload size="18px" /><input type="file" className={style.arquivo} />
            </button>
            <button  className={style.downBtn} onClick={() => setIsOpen(false)}>
             Download <AiOutlineDownload size="18px" />
            </button>
           
            </div>
          </div>
         </div>
      </div>
      
    </div>
  )
  


};

export default Modal;
