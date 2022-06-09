import Cadastro from "./Cadastro.module.css";
import React from "react";
import Button from "../Button/Button";

export default function Cadastro () {
      
    return (
          <div>

          <form>
          <label>CADASTRO</label>
          
          <label>Nome Completo:</label>
          <input className={style.input} type="text" placeholder="Digite seu nome" />
          
          <label>CPF</label>
          <input className={style.input} type="text" id="Cpf" placeholder="Digite seu Cpf" />

          <label>E-mail:</label>
          <input className={style.input} type="text" id="Email" placeholder="Digite seu e-mail" />
         
          <label>Senha:</label>
          <input className={style.input} type="password" id="Senha" placeholder="Digite sua senha" />
          
          <label>Confirme sua senha:</label>
          <input className={style.input} type="password" id="confirmSenha" placeholder="Confirme sua senha" />
          
          <label>Matrícula:</label>
          <input className={style.input} type="text" id="matricula" placeholder="Digite sua matrícula" />
          </form>
        
          <Button texto="Criar" type="text" />

        </div>
  )

}