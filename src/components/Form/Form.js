import styles from './Form.module.css';
import Button from './Button'

function Form(){
   return (
      <form className={styles.form}>
         <label>Username</label>
         <input type='text'></input>
         <label>Age (Years)</label>
         <input type='number'></input>
         <Button>Submit</Button>
      </form>
   )
}

export default Form;