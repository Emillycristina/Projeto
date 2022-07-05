import React from "react";
import style from "./cadastro2.module.css";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { NativeSelect} from "@mui/material";




export default function Cadastro2(){
     
    return(
    <Box
        
        component="form" style={{background:"white", width:"800px", marginTop:"10px", marginLeft:"10px", height:"1000px"}}
        sx={{
          '& .MuiTextField-root': { m: 1, width: ' 30ch' },
        }}
        noValidate
        autoComplete="off"
   
    >
      <div>
        <h3 style={{marginLeft:"20px"}}>CADASTRO</h3>
      </div>

    
    <div style={{background:"white", marginRight:"80px", marginTop:"30px" }}>
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
          
          <TextField variant ="standard"
            required
            id="outlined-helperText"
            label=""
            type= "date"

           
            
          /> 
          <hr style={{marginTop:"30px", width:"580px", marginLeft:"8px"}}></hr>
          <br></br>

         
        </div>
        
       <div style={{ marginLeft:"-10px", marginTop:"30px", width:"300px"}}>
      
       <inputLabel variant="standart" id="demo-simple-select-label" style={{marginLeft:"20px", marginRight:"5px",marginBottom:"5px"}}>
         <i><b>Tipo de contratação:*</b></i>
       </inputLabel><br></br>
       <NativeSelect style={{marginBottom:"10px",marginLeft:"20px",  width:"30ch", marginTop:"12px", color:"grey"}}
            required
            labelId="demo-simple-select-label"
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
        
        <inputLabel variant="standart" id="demo-simple-select-label" style={{marginLeft:"20px", marginRight:"5px",marginBottom:"5px"}}>
         <i><b>Situação:</b></i>
       </inputLabel><br></br>
       <NativeSelect style={{marginBottom:"10px",marginLeft:"20px", width:"30ch", color:"grey" }}
            required
            labelId="demo-simple-select-label"
            id="outlined-number"
            label="Tipo de contratação"
            type="select"
           
          > 

          <option>Ativo</option>
          <option>Falecido</option>
          <option>Desligado</option>
          <option>Aponsentado</option>
         
        </NativeSelect><br></br><br></br>
        
        <inputLabel variant="standart" id="demo-simple-select-label" style={{marginLeft:"20px", marginRight:"5px",marginBottom:"5px"}}>
          <i><b>Data da Aposentadoria:</b></i>
          </inputLabel>
         <TextField style={{ marginLeft:"20px", width:"30ch", marginBottom:"20px", color:"grey"}}
            variant ="standard"
            id="outlined-telefone-input"
            
            type="date"
            
          /><br></br><br></br>
          
         
          <inputLabel variant="standart" id="demo-simple-select-label" style={{marginLeft:"20px", marginRight:"5px",marginBottom:"5px"}}>
          <i><b>Aponsentadoria por:</b></i>
          </inputLabel><br></br>
          <NativeSelect style={{marginBottom:"10px",marginLeft:"20px", width:"30ch", color:"grey"}}
            
            labelId="demo-simple-select-label"
            id="outlined-number"
            label="Tipo de contratação"
            type="select"
           
          > 

          <option>Tempo de Trabalho</option>
          <option>Idade</option>
          <option>Invalidez</option>
          <option>---</option>
          
         
        </NativeSelect>
          
        <hr style={{ marginTop:"30px",width:"580px", marginLeft:"8px"}}></hr><br></br>
           
          <inputLabel variant="standart" id="demo-simple-select-label" style={{marginLeft:"20px", marginRight:"5px",marginBottom:"5px"}}>
          <i><b>Beneficiários:</b></i>
          </inputLabel><br></br>
          <TextField  variant ="standard"
            required
            labelId="demo-simple-select-label"
            id="outlined-number"
            label=""
            type="number"
            InputLabelProps={{
            shrink: true,
          }}
           
          /> 

         <Button style={{background: "black", marginTop:"50px", marginLeft:"5px"}} variant="contained" component="span">
             Atualizar
         </Button>  
        
        </div>
        <div style={{ marginLeft:"290px", marginTop:"-550px", width:"300px"}}>
       
      
         
         <inputLabel variant="standart" id="demo-simple-select-label" style={{marginLeft:"20px", marginRight:"5px",marginBottom:"5px"}}>
          <i><b>Motivo do desligamento:</b></i>
         </inputLabel>
          <TextField variant ="standard"
            required
            id="outlined-required"
            label=""
            
          /> <br></br><br></br>

          <inputLabel variant="standart" id="demo-simple-select-label" style={{marginLeft:"20px", marginRight:"5px",marginBottom:"5px"}}>
          <i><b>Data do desligamento:</b></i>
          </inputLabel>
          <TextField variant ="standard"
            id="outlined-telefone-input"
            label=""
            type="date"
            
          />
          </div>
          
        
         

        
       
        
       
      </Box>
    );  

      


     






}
