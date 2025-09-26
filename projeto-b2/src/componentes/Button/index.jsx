import "./button.css";

export default function Button(props) {
console.log(props);

  return (
   <button className="custom-button" onClick={props.onClick}>
    {props.text}
   </button>
  )
}
