import styles from './PopupOverlay.module.css';


function PopupOverlay(props){
   function closeSequence(event){
      console.log(event.target.getAttribute('data-item-id'))
      if(event.target.getAttribute('data-item-id') === 'popup-window__closing-ribbon'){
         props.popupTrigger();
      }
   }
   return(
      <section className={styles['popup-window']} onClick={closeSequence}>
      <div className={styles['popup-window__wrapper']}>
         <div className={styles['popup-window__closing-ribbon']}>
            <svg className={styles['popup-window__closing-icon']} data-item-id='popup-window__closing-ribbon' width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className={styles['popup-window__closing-icon-inner']} d="M21 1L1 21M21 21L1 1L21 21Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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