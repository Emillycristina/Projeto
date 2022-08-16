import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MediaQueryReact from 'media-query-react';
import InputLabel from '@mui/material/InputLabel'
import InputMask from "react-input-mask"





export default function Cadastro2(){
     
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




   return(

    <MediaQueryReact mediaQueries={screenSize}>
   <div style={{background:"white", width: "100hv", marginTop:"-100px", marginLeft:"-30px", paddingBottom:"800px"}}
    
       
   
    >
      
   <div style={{background:"white", marginRight:"80px", marginTop:"100px", marginLeft:"60px"}}>
        <TextField variant ="standard" style={{width:"30ch"}}
            
            required
            label="Nome" 
            id="outlined-required"
            
          /> <br></br><br></br>
          <TextField variant ="standard" style={{width:"30ch"}}
            
            required
            id="outlined-required"
            label="CPF"
          /><br></br><br></br>
          
          <TextField variant ="standard" style={{width:"30ch"}}
            id="outlined-telefone-input"
            label="Telefone"
            type="tel"
            placeholder="(xx) xxxxx-xxxx"
            
          /><br></br><br></br>
          <TextField variant ="standard" style={{width:"30ch"}}
            required
            id="outlined-endereco-input"
            label="Endereço"
            type=""
            
          /><br></br><br></br>
          <TextField variant ="standard" style={{width:"30ch"}}
            required
            id="outlined-cpf-input"
            label="CEP"
            type="CEP"
            placeholder="xxxxx-xxx"
            
          /><br></br><br></br>

          <TextField variant ="standard" style={{width:"30ch"}}
            id="outlined-number"
            label="Number"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
          /> <br></br><br></br>
          
          <InputLabel variant="standard" id="demo-simple-select-label" style={{width:"30ch" }}>
          Data de Nasc.:
          </InputLabel><br></br>
          <TextField variant ="standard" style={{width:"30ch"}}
            required
            id="outlined-helperText"
            label=""
            type= "date"
             /> 
         <br></br>
         

         <Button style={{background: "black", marginTop:"50px", marginLeft:"5px"}} variant="contained" component="span">
             Atualizar
         </Button>  
         
         
        
        </div>
        
     
      
         
         
          
          
        
         

        
       
        
       
        </div>

      </MediaQueryReact>
    );  

       


     






}
