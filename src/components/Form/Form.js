import React, { useState } from 'react';
import styles from './Form.module.css';
import Button from './Button';
import Input from './Input';

function Form(){
   function submitHandler(event){
      event.preventDefault();
   }
   const [userName, setUserName] = useState('');
   
   function userNameChangeHandler(event){
      setUserName(event.target.value)
   } 

   const [userAge, setUserAge] = useState('');
   
   function userAgeChangeHandler(event){
      setUserAge(event.target.value)
   }

   return (
      <form onSubmit={submitHandler} className={styles.form}>
         <label>Username</label>
         <Input value={userName} onChange={userNameChangeHandler} type='text'/>
         <label>Age (Years)</label>
         <Input value={userAge} onChange={userAgeChangeHandler} type='number'/>
         <Button>Add user</Button>
      </form>
   )
}

export default Form;