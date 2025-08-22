import "./Button.css"

const Button = (props) => {
    return ( 
        <button onClick={props.buttonWork}>{props.name}</button>
     );
}
 
export default Button;