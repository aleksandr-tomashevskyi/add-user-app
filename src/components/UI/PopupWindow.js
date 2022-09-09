import CardTitled from "./CardTitled";
import styles from "./PopupWindow.module.css";

function PopupWindow(props) {
  return (
    <div className={styles["popup-window"]}>
      <CardTitled cardTitle="Invalid input">{props.message}</CardTitled>
    </div>
  );
}

export default PopupWindow;
