import style from "./Tabela.module.css";
import React from "react";


export default function Tabela() {
  
  const Table = ({dataKeys, data}) => (
    <table className={style.tabela}>
    <thead className={style.thead}>
      <tr>
        {
          dataKeys.map(keys => {
   
   
                  return(
                    <th key={keys}>{keys}</th>
                  )
                })
              }
      
            </tr>
          </thead>
          <tbody>
            {
              data.map(data => {
                return(
                  <tr data={data.id}>
      
                    <th >{data.id}</th>
                    <th>{data.Nome}</th>
                    <th >{data.Cpf}</th>
                    <th>{data.Situação}</th>
                    <th >{data.cargo}</th>
                  </tr>
                )
              })
            }
      
      
          </tbody>
        </table>
      )
          }
