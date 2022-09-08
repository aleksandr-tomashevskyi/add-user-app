import styles from './UserItem.module.css'

function UserItem(props){
   
   return(
      <div className={styles['user-item']}>
         <span>{props.userName} ({props.userAge} years old)</span>
      </div>
   )
}

export default UserItem;