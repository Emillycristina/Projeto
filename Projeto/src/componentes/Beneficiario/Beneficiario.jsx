import *  as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { NativeSelect} from "@mui/material";
import InputLabel from '@mui/material/InputLabel'
import { useState } from 'react';




export default function Beneficiario(){
    
   
   const [number, setNumber] = useState("")
   const [div, setDiv] = useState("")

    
   const handleClick = (setNumber, setDiv) => {
     setNumber.event.target.value
     return (
       setDiv * setNumber.value
     ) 
    



    }


    return(
  
    <Box
    
        component="form" style={{background:"white", width:"800px", marginTop:"-85px", marginLeft:"-40px", height:"800px", marginBottom:"10px"}}
        sx={{
          '& .MuiTextField-root': { m: 1, width: ' 30ch' },
        }}
        noValidate
        autoComplete="off"
   
    >

      
      <div onChange = {(e) => setDiv(e.target.value)} value ={div}  style={{ marginLeft:"-20px", marginTop:"90px", width:"300px"}}>
         
          <InputLabel variant="standard" id="demo-simple-select-label" style={{marginLeft:"20px", marginRight:"5px",marginBottom:"5px"}}>
          <i>Beneficiários:</i>
          </InputLabel>
         
          <TextField  variant ="standard"
            required
            value={number}
            onChange = {(e) => setNumber(e.target.value)}
            onClick={() => handleClick()}
            id="outlined-number"
            label=""
            type="number"
            
            InputLabelProps={{
            shrink: true,
          }}
           

          /> 
           <TextField variant ="standard"
            
            required
           // value={Nome}
            label="Nome" 
            id="outlined-required"
            
          /> 
           <TextField variant ="standard"
            
            required
            //value={cpf}
            label="CPF" 
            id="outlined-required"
            
          /> 

          <TextField variant ="standard"
            
            required
            //value={Grau}
            label="Grau de Parentesco" 
            id="outlined-required"
            
          />
      
      
      
        
      
        
      
      
      </div>
    
    
      <Button style={{background: "black", marginTop:"50px", marginLeft:"5px"}} variant="contained" component="span">
             Atualizar
      </Button>  
        
          

       
          
         
          
          
         
        
          



      
        
        
      </Box>
    );  

      


     






}
