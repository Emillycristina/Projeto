import style from "./Button.module.css";




export default function Button(props) {

  return (
    <>
      <button onClick={props.onClick} onMouseOver={props.changeBg} onMouseLeave={props.changeBg}
        style={{
          textAlign: props.textAlign ? props.textAlign : style.button,
          backgroundColor: props.bgColor ? props.bgColor : style.button,
          color: props.textColor ? props.textColor : style.button,
          width: props.width,
          display: props.display ? props.display : style.display,
        }}
      >
        {props.texto}
      </button>
    </>
  );
}

