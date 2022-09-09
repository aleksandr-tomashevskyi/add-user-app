import styles from './CardTitled.module.css';

function CardTitled(props){
   return (
      <div className={styles['card-titled']}>
         <div className={styles['card-titled__title-wrapper']}>
            <h2 className={styles['card-titled__title']}>{props.cardTitle}</h2>
            </div>
         <div className={styles['card-titled__content-wrapper']}>{props.children}</div>
      </div>
   )
}

export default CardTitled;