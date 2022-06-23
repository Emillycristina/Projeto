import style from "./Prontuario.module.css";
import Navigation from "../navbar/Navigation";
import { FcFolder  } from "react-icons/fc";
import Modal from "../Modal/Modal"
import { useState, useRef} from "react";



export default function Prontuario(){
    
  const [dropdown, setdropdown] = useState("");
  const modalRef = useRef(null);

     const toggleDropdown = () =>{
     setdropdown("show");
     document.body.addEventListener("click", closeDropdown);
     }
    
     const closeDropdown = event =>{
      event.stopPropagation();
      const contain = modalRef.current.contains.target(event.target);
      if(!contain){
      setdropdown("");
      document.body.removeEventListener("click",closeDropdown);
    }
  }
   return (
    
     <div>
        <Navigation/>
       <div>
        

       </div>
       
       
       <div className={style.FcFolder}>
        <Modal className={dropdown} modalRef={modalRef}/>

        <FcFolder size="70" className={style.folder} onClick={toggleDropdown}/>
        <FcFolder size="70" className={style.folder} onClick={toggleDropdown}/>
        <FcFolder size="70" className={style.folder} onClick={toggleDropdown}/>
        <FcFolder size="70" className={style.folder} onClick={toggleDropdown}/>

       </div>

     
     </div>
     
    )



  

}