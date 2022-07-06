import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { NativeSelect} from "@mui/material";
import InputLabel from '@mui/material/InputLabel'





export default function Cadastro2(){
   
   return(
  
    <Box
    
        component="form" style={{background:"white", width:"800px", marginTop:"-85px", marginLeft:"-50px", height:"800px", marginBottom:"10px"}}
        sx={{
          '& .MuiTextField-root': { m: 1, width: ' 30ch' },
        }}
        noValidate
        autoComplete="off"
   
    >
      
    
    
    <div style={{background:"white", marginRight:"80px", marginTop:"100px" }}>
        <TextField variant ="standard"
            
            required
            label="Nome" 
            id="outlined-required"
            
          />
          <TextField variant ="standard"
            required
            id="outlined-required"
            label="CPF"
            
          />
          <TextField variant ="standard"
            id="outlined-telefone-input"
            label="Telefone"
            type="tel"
            
          />
          <TextField variant ="standard"
            required
            id="outlined-endereco-input"
            label="Endereço"
            type=""
            
          />
          <TextField variant ="standard"
            required
            id="outlined-cpf-input"
            label="CEP"
            type="CEP"
            
          />

          <TextField variant ="standard"
            id="outlined-number"
            label="Number"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
          /> 
          
          <InputLabel variant="standard" id="demo-simple-select-label" style={{marginLeft:"-1px", marginRight:"-10px",marginBottom:"5px", marginTop:"7px"}}>
          <i>Data de Nasc.:</i>
          </InputLabel>
          <TextField variant ="standard"
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
        
       
      
         
         
          
          
        
         

        
       
        
       
      </Box>
    );  

       


     






}
