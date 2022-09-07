import styles from './Input.module.css';

function Input(props){
   return(
      <input type={props.type} className={styles.inputs}></input>
   )
}

export default Input;