import Card from "./UI/Card";
import Form from "./Form/Form";
import styles from './FormBlock.module.css';

function FormBlock() {
  return (
    <div className={styles['form-block']}>
      <Card>
        <Form />
      </Card>
    </div>
  );
}

export default FormBlock;
