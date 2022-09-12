import React, { useState } from 'react';
import styles from './Input.module.css';

function Input(props){

   return(
      <input id={props.elementId} value={props.value} onChange={props.onChange} type={props.type} className={styles.inputs}></input>
   )
}

export default Input;