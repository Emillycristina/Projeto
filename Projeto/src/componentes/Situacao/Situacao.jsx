import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { NativeSelect} from "@mui/material";
import InputLabel from '@mui/material/InputLabel';

export default function Situacao(){
   
    return(
   
     <Box
     
         component="form" style={{background:"white", width:"800px", marginTop:"-85px", marginLeft:"-50px", height:"800px"}}
         sx={{
           '& .MuiTextField-root': { m: 1, width: ' 30ch' },
         }}
         noValidate
         autoComplete="off"
    
     >
       
     
     <div style={{background:"white", marginRight:"80px", marginTop:"90px" }}>
       
        <InputLabel variant="standard" id="demo-simple-select-label" style={{marginLeft:"20px", marginRight:"5px",marginBottom:"5px"}}>
        <i>Tipo de contratação:*</i>
        </InputLabel>
        <NativeSelect style={{marginBottom:"10px",marginLeft:"20px",  width:"30ch", marginTop:"12px", color:"grey"}}
             required
             id="outlined-number"
             label="Tipo de contratação"
             type="select"
            
           > 
 
           <option>CLT</option>
           <option>Estatutário</option>
           <option>Comissionado</option>
           <option>Eventual</option>
           <option>Patrulheiro</option>
           <option>Mobral</option>
        </NativeSelect><br></br>
         
        <InputLabel variant="standard" id="demo-simple-select-label" style={{marginLeft:"20px", marginRight:"5px",marginBottom:"5px"}}>
          <i>Situação:</i>
        </InputLabel>
        <NativeSelect style={{marginBottom:"10px",marginLeft:"20px", width:"30ch", color:"grey" }}
             required
             id="outlined-number"
             label="Tipo de contratação"
             type="select"
            
           > 
 
           <option>Ativo</option>
           <option>Falecido</option>
           <option>Desligado</option>
           <option>Aponsentado</option>
          
         </NativeSelect>
         
         <InputLabel variant="standard" id="demo-simple-select-label" style={{marginLeft:"20px", marginRight:"5px",marginBottom:"5px"}}>
           <i>Data da Aposentadoria:</i>
        </InputLabel>
        <TextField style={{ marginLeft:"20px", width:"30ch", marginBottom:"20px", color:"grey"}}
             variant ="standard"
             id="outlined-telefone-input"
             
             type="date"
             
           /><br></br>
           
          
           <InputLabel variant="standard" id="demo-simple-select-label" style={{marginLeft:"20px", marginRight:"5px",marginBottom:"5px"}}>
           <i>Aponsentadoria por:</i>
           </InputLabel>
           <NativeSelect style={{marginBottom:"10px",marginLeft:"20px", width:"30ch", color:"grey"}}
             id="outlined-number"
             label="Tipo de contratação"
             type="select"
            
           >
 
           <option>Tempo de Trabalho</option>
           <option>Idade</option>
           <option>Invalidez</option>
           <option>---</option>
           
          
         </NativeSelect>
         <br></br>
         <Button style={{background: "black", marginTop:"50px", marginLeft:"5px"}} variant="contained" component="span">
             Atualizar
         </Button> 
        
           
         </div>
         
         <div style={{ marginLeft:"300px", marginTop:"-401px", width:"300px"}}>
        
       
          
          <InputLabel variant="standard" id="demo-simple-select-label" style={{marginLeft:"20px", marginRight:"5px",marginBottom:"5px"}}>
           <i>Motivo do desligamento:</i>
          </InputLabel>
           <TextField variant ="standard"
             required
             id="outlined-required"
             label=""
             
           /> <br></br>
 
           <InputLabel variant="standard" id="demo-simple-select-label" style={{marginLeft:"20px", marginRight:"5px",marginBottom:"5px"}}>
           <i>Data do desligamento:</i>
           </InputLabel>
           <TextField variant ="standard"
             id="outlined-telefone-input"
             label=""
             type="date"
             
           />
            

             
         
           </div>
           
         
          
 
         
        
         
        
       </Box>
     );  
 
       
 
 
      
 
 
 
 
 
 
 }
 