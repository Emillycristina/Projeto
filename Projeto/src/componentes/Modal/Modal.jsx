import style from "./modal.module.css";
import React from "react";



const Modal = props => {
    
    const {className, modalRef} = props;
    

    return(
        <div ref={modalRef} className={`${className} modal`}  >
            <p></p>
        </div>
    )

}


export default Modal;