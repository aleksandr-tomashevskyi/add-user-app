import styles from './Form.module.css';
import Button from './Button';
import Input from './Input';

function Form(){
   
   return (
      <form className={styles.form}>
         <label>Username</label>
         <Input  type='text'/>
         <label>Age (Years)</label>
         <Input  type='number'/>
         <Button>Add user</Button>
      </form>
   )
}

export default Form;