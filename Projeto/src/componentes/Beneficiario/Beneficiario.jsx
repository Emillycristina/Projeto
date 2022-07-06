import *  as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { NativeSelect} from "@mui/material";
import InputLabel from '@mui/material/InputLabel'



export default function Beneficiario(){
   
  
    return(
  
    <Box
    
        component="form" style={{background:"white", width:"800px", marginTop:"-85px", marginLeft:"-50px", height:"800px", marginBottom:"10px"}}
        sx={{
          '& .MuiTextField-root': { m: 1, width: ' 30ch' },
        }}
        noValidate
        autoComplete="off"
   
    >

      
      <div  style={{ marginLeft:"-10px", marginTop:"60px", width:"300px"}}>
         
          <InputLabel variant="standard" id="demo-simple-select-label" style={{marginLeft:"20px", marginRight:"5px",marginBottom:"5px"}}>
          <i><b>Beneficiários:</b></i>
          </InputLabel>
          <br></br>
          <TextField  variant ="standard"
            required
           id="outlined-number"
            label=""
            type="number"
            InputLabelProps={{
            shrink: true,
          }}
           
          /> 
           <TextField variant ="standard"
            
            required
            label="Nome" 
            id="outlined-required"
            
          /> 
      
      
        
      
         <Button style={{background: "black", marginTop:"50px", marginLeft:"5px"}} variant="contained" component="span">
             Atualizar
         </Button>  
        
      
      
      </div>
    
    
    
          

       
          
         
          
          
         
        
          



      
        
        
        
         

        
       
        
       
      </Box>
    );  

      


     






}
