import React from "react";
import style from "./cadastro2.module.css";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { margin } from "@mui/system";



export default function Cadastro2(){
     
    return(
    <Box
        component="form" style={{background:"white", width:"600px", marginTop:"10px", marginLeft:"10px"}}
        sx={{
          '& .MuiTextField-root': { m: 1, width: ' 30ch' },
        }}
        noValidate
        autoComplete="off"
    >
    <div style={{background:"white", marginRight:"80px"}}>
        <TextField
            required
            label="Nome"
            id="outlined-required"
            defaultValue="Nome"
          />
          <TextField
            required
            id="outlined-disabled"
            label="CPF"
            defaultValue="CPF"
          />
          <TextField
            id="outlined-password-input"
            label="Telefone"
            type=""
            
          />

          <TextField
            id="outlined-read-only-input"
            label="Endereço"
            defaultValue="Hello World"
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField
            id="outlined-number"
            label="Number"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField id="outlined-search" label="Search field" type="search" />
          <TextField
            id="outlined-helperText"
            label="Helper text"
            defaultValue="Default Value"
            helperText="Some important text"
          />
        </div>
        
       
      </Box>
    );  

      


     






}
