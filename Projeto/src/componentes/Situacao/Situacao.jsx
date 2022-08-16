import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { NativeSelect} from "@mui/material";
import MediaQueryReact from 'media-query-react';
import InputLabel from '@mui/material/InputLabel';


export default function Situacao(){
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
     
     <div style={{background:"white", marginLeft:"60px", marginTop:"120px" }}>
       
        <InputLabel variant="standard" id="demo-simple-select-label" >
          Tipo de contratação:*
        </InputLabel><br></br>
        <NativeSelect style={{  width:"30ch", color:"grey"}}
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
        </NativeSelect><br></br><br></br>
         
        <InputLabel variant="standard" id="demo-simple-select-label" style={{}}>
          Situação:
        </InputLabel><br></br>
        <NativeSelect style={{ width:"30ch", color:"grey" }}
             required
             id="outlined-number"
             label="Tipo de contratação"
             type="select"
            
           > 
 
           <option>Ativo</option>
           <option>Falecido</option>
           <option>Desligado</option>
           <option>Aponsentado</option>
           
         </NativeSelect><br></br><br></br>
         
         <InputLabel variant="standard" id="demo-simple-select-label" style={{ }}>
          Data da Aposentadoria:
        </InputLabel><br></br>
        <TextField style={{  width:"30ch", color:"grey"}}
             variant ="standard" 
             id="outlined-telefone-input"
             
             type="date"
             
           /><br></br><br></br>
           
          
           <InputLabel variant="standard" id="demo-simple-select-label" style={{ }}>
           Aponsentadoria por:
           </InputLabel><br></br>
           <NativeSelect style={{ width:"30ch", color:"grey"}}
             id="outlined-number"
             label="Tipo de contratação"
             type="select"
            
           >
 
           <option>Tempo de Trabalho</option>
           <option>Idade</option>
           <option>Invalidez</option>
           <option>---</option>
           
          
         </NativeSelect>
         <br></br><br></br>
         
        
          <InputLabel variant="standard" id="demo-simple-select-label" style={{ marginRight:"5px"}}>
          Motivo do desligamento:
          </InputLabel><br></br>
           <TextField variant ="standard" style={{width:"30ch"}}
             required
             id="outlined-required"
             label=""
             
           /> <br></br><br></br>
 
           <InputLabel variant="standard" id="demo-simple-select-label" style={{ marginRight:"5px"}}>
           Data do desligamento:
           </InputLabel><br></br>
           <TextField variant ="standard" style={{width:"30ch"}}
             id="outlined-telefone-input"
             label=""
             type="date"
             
           /> <br></br>
            

           <Button style={{background: "black", marginTop:"50px", marginLeft:"5px"}} variant="contained" component="span">
           Atualizar
          </Button> 
         
           
            </div>
          
          
        
         
        
           </div>


      </MediaQueryReact>
     );  
 
       
 
 
      
 
 
 
 
 
 
 }
 