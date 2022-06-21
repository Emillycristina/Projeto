import style from "./tabela.module.css";
import React from "react";
import DataGrid from "react-data-grid";
;

export default function Tabela() {
  
  const columns = [
    { key: 'id', name: 'ID' },
    { key: 'name', name: 'Name' },
    { key: 'cpf', name: 'CPF' },
    { key: 'situação', name: 'Situação'},
    
   

  
  ];
  
  const rows = [
    { id: 1, title: 'Name' },
    
  ];
  
  const rowClassRules = {
    'rag-green': 'data.situação === Ativo',
    'rag-red': 'data.situação === Inativo',
    
};
  
 
return (

 <div className={style.container}>
   <div className={style.left}></div>
     <div className={style.center}>
      <div>
       <DataGrid theme="default-dark" rowClassRules={rowClassRules} columns={columns} rows={rows} style={{width:800, height: 200, }} className={style.table}/>
 
    </div>
   </div>
   <div className={style.rigth}></div>
  </div>

    )


}
