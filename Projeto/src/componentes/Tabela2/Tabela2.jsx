
import React from "react";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from "@mui/material";
import { MdReadMore } from "react-icons/md";
import { Link } from "react-router-dom";


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(Nome, CPF, Matrícula, Contratação, Situação, ) {
  return { Nome, CPF, Matrícula, Contratação, Situação};
}

const rows = [
  createData('Nome', 'CPF', 'Matrícula','Contratação','Situação')
];

export default function CustomizedTables() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 400 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Nome&nbsp;</StyledTableCell>
            <StyledTableCell align="right">CPF&nbsp;</StyledTableCell>
            <StyledTableCell align="right">Matrícula&nbsp;</StyledTableCell>
            <StyledTableCell align="right">Contratação&nbsp;</StyledTableCell>
            <StyledTableCell align="right">Situação&nbsp;</StyledTableCell>
            
         </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.Nome}
              </StyledTableCell>
              <StyledTableCell align="right">{row.CPF}</StyledTableCell>
              <StyledTableCell align="right">{row.Matrícula}</StyledTableCell>
              <StyledTableCell align="right">{row.Contratação}</StyledTableCell>
              <StyledTableCell align="right">{row.Situação}</StyledTableCell>
              
              
           </StyledTableRow>
          
          ))}
         </TableBody>
        
      </Table>
     
      <Button  style={{background:"black"}}  variant="contained">Editar</Button>
      <Button  style={{background:"black", marginLeft:"1px", width:"100px" , paddingTop:"10px"}}  variant="contained">Mais<MdReadMore size="22"/></Button>
    </TableContainer>

   
 
 
 
   );
}
