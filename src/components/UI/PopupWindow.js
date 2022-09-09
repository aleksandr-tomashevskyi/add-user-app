import CardTitled from './CardTitled';
import styles from './PopupWindow.module.css';

function PopupWindow(){
   return(
      <div className={styles['popup-window']}>
      <CardTitled cardTitle='Invalid input'>

</CardTitled>
      </div>
   )
}

export default PopupWindow;