import styles from './ResultEntry.module.css'

function ResultEntry(props){
   return(
      <div className={styles['result-entry']}>
         {props.children}
      </div>
   )
}

export default ResultEntry;