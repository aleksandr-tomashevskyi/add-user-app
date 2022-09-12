import styles from './Button.module.css'

function Button(props){
   return (
      <button type={props.elementType} className={styles['submit-button']}>
         {props.children}
      </button>
   )
}

export default Button;