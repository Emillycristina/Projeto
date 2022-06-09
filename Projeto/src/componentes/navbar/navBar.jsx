import style from "./navBar.module.css";
import Navigation from "./Navigation";


export default function NavBar() {
    return (
      <div className={style.NavBar}>
        <Navigation />
       
     
      </div>
    );
  }