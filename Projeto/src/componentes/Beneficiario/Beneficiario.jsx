import *  as React from 'react';
import style from "./Beneficiario.module.css"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MediaQueryReact from 'media-query-react';
import InputLabel from '@mui/material/InputLabel'
import { useState } from 'react';
import {AiOutlineClose} from "react-icons/ai";





export default function Beneficiario(){
    
   const [isOpen, setIsOpen] = useState(false);
   const [nome, setNome] = useState("");
   const [cpf, setCpf] = useState("");
   const [grauParentesco, setGrauParentesco] = useState("")
   const [itemsList, setItemsList] = useState([{
    nome: nome ,
    cpf: cpf,
    grauDeParentesco: grauParentesco

   }]
   );
   
 

 itemsList.forEach(item => {
    console.log(item.nome, item.cpf);
 });

 const handleInputChange = (event,itemsList) => {
  itemsList = event.target.value
  setItemsList(itemsList)
 }
 
 const onSubmitHandler = (e) => {
  e.preventDefault()

  console.log(itemsList)

 };

  /* /*  function handleAddItemToList(event) {
    event.preventDefault(); 
    
    setItemsList([{...itemsList}]); // <----- Copia todos os items ja existentes e entao adiociona o novo item
    
    
   } */


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
   
  
 
 
  const Modal = ({ setIsOpen }) => {
   
   
   return (
      <>
        <form  className={style.formulario1} onSubmit={onSubmitHandler}>
        <div className={style.darkBG} onClick={() => setIsOpen(false)} />
        <div className={style.centered}>
          
   
          <div className={style.modal} >
            <div className={style.modalHeader}>
              
            </div>
            <button className={style.closeBtn} onClick={() => setIsOpen(false)}>
              <AiOutlineClose style={{ marginBottom: "-3px" }} />
            </button>
            <div className={style.modalContent}>
          
            <TextField variant ="standard" style={{width:"30ch"}}
            onChange={handleInputChange}
            //value={nome}
            autoFocus
            required
            label="Nome" 
            id="outlined-required"
          
            
          /> <br></br><br></br>

           <TextField variant ="standard" style={{width:"30ch"}}
            onChange={handleInputChange}
           // value={cpf}
            required
            label="CPF" 
            id="outlined-required"
           


          /> <br></br><br></br>

          <TextField variant ="standard" style={{width:"30ch"}}
            onChange={handleInputChange}
            //value={grauParentesco}
            required
            label="Grau de Parentesco" 
            id="outlined-required"
            
            />
           
            </div>
            
            <div className={style.modalActions}>
              <div className={style.actionsContainer}>
                <button className={style.deleteBtn} onClick={() => setIsOpen(true)}>
                  SALVAR
                </button>
                <button
                  className={style.cancelBtn}
                  onClick={() => setIsOpen(false)}
                 // onSubmit={handleAddItemToList}
                
                >
                  CANCELAR
                </button>
                
              </div>
            </div>
          </div>
        </div>
      </form>
      </>
    );
  };
  




    return(
    <MediaQueryReact mediaQueries={screenSize}>
    <div style={{background:"white", width: "100hv", marginTop:"-100px", marginLeft:"-30px", paddingBottom:"800px"}}
    
       
   
    >

      
      <div  style={{ marginLeft:"60px", marginTop:"120px", width:"300px"}}>
         
          <InputLabel variant="standard" id="demo-simple-select-label" style={{ marginRight:"5px",marginBottom:"5px"}}>
           Quantidade de Beneficiários:
          </InputLabel>
         
          <TextField  variant ="standard" style={{width:"30ch"}}
            required
            
            id="outlined-number"
            label=""
            type="number"
            
            InputLabelProps={{
            shrink: true,
          }}
           

          /> <br></br><br></br>
           
        
      
      
      </div>
    
      
     
      <div  style={{ marginLeft:"60px", marginTop:"120px", width:"400px"}}>

        
              
      

    
      </div>
    
      <Button style={{background: "black", marginTop:"50px", marginLeft:"60px"}} variant="contained" component="span" onClick={() => setIsOpen(true)} >
             Adicionar Beneficiário
      </Button>
      {isOpen && <Modal setIsOpen={setIsOpen} />}
    
     {/*  <Button style={{background: "black", marginTop:"50px", marginLeft:"50px"}} variant="contained" component="span">
             Atualizar
      </Button>  */}

        
          

       
          
         
          
          
         
        
          



      
        
        
      </div>

      </MediaQueryReact>
    );  

      


     






}
