import Card from "./UI/Card";
import Form from "./Form/Form";
import styles from './FormBlock.module.css';

function FormBlock(props) {

  function saveEntry(newEntryData){
    props.onSaveEntry(newEntryData)
  }

  return (
    <div className={styles['form-block']}>
      <Card>
        <Form onSaveEntry = {saveEntry}/>
      </Card>
    </div>
  );
}

export default FormBlock;
