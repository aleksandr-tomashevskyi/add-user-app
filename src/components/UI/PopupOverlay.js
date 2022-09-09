import styles from './PopupOverlay.module.css'

function PopupOverlay(props){
   return(
      <section className={styles['popup-window']}>
      <div className={styles['popup-window__wrapper']}>
         <div className={styles['popup-window__closing-ribbon']}>
            <svg className={styles['popup-window__closing-icon']} width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className={styles['popup-window__closing-icon-inner']} d="M21 1L1 21M21 21L1 1L21 21Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
         </div>
         <div className={styles['popup-window__body']}>
            <div className={styles['popup-window__content']}>
               {props.children}
            </div>
         </div>
      </div>
</section>

   )
}

export default PopupOverlay;