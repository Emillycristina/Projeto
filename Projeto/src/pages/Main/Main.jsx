import style from "./Main.module.css"
import NavBar from "../../componentes/navbar/navBar"
import Tabela from "../../componentes/Tabela/tabela"


export default function Main () {

    return (

            <div className={style.main}>
                <NavBar />
                <Tabela />
                
             

            </div>




    )
}