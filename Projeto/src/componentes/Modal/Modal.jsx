import style from "./modal.module.css";
import * as React from "react";
import {AiOutlineClose, AiOutlineDownload,AiFillPrinter} from "react-icons/ai";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { styled } from '@mui/material/styles';
import { FaTrash } from "react-icons/fa";
import { RiSendPlaneFill } from "react-icons/ri";
import IconButton from '@mui/material/IconButton';

const Input = styled('input')({
  display: 'none',
});

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
             <div className={style.container1}>

            
             <label htmlFor="contained-button-file">
             <Input accept="image/*" id="contained-button-file" multiple type="file" />
             <Button style={{background: "black"}} variant="contained" component="span">
              Upload
             </Button></label>
             <IconButton style={{background:"black", color:"white",  cursor:"pointer", width:"35px", marginRight:"-20px"}} onClick={() => setIsOpen(true)} ><RiSendPlaneFill
             size="18px"  /></IconButton>
           
            </div>
           

            <ButtonGroup variant="contained" aria-label="outlined primary button group">
            <Button style={{background:"black", color:"white",  cursor:"pointer"}} onClick={() => setIsOpen(true)}><AiOutlineDownload size="18px"  /></Button>
            <Button style={{background:"black" ,color:"white" , cursor:"pointer"}}onClick={() => setIsOpen(true)}><AiFillPrinter size="18px"  /></Button>
            <Button style={{background:"black" ,color:"white" , cursor:"pointer"}}onClick={() => setIsOpen(true)}><FaTrash size="18px"  /></Button>
            </ButtonGroup>
            
     
           </div>
          </div>
         </div>
      </div>
      
    </div>
  )
  


};
export default Modal;
