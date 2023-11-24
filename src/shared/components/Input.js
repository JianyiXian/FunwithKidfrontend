import './Input.css';

const Input = props => {
    return (
        <>  <label htmlFor={props.id} className={`data-label ${props.labelClassName}`}>{props.label}</label>
            <input type={props.type || 'text'} id={props.id} className={`data-input ${props.inputClassName}`} placeholder={props.placeholder} onChange={props.onChange}></input>
        </>);

}

export default Input;