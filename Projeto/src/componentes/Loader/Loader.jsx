import style from "./Loader.module.css";
import React from "react";

export default function Loader() {
  return (
    <>
    <div className={style.spinnerContainer}>
      <div className={style.loadingSpinner}>
     </div>
    </div>
    </>
  );
}