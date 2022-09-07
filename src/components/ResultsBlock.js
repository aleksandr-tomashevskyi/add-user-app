import Card from "./UI/Card";
import ResultEntry from "./Results/ResultEntry";
import styles from "./ResultsBlock.module.css";

function ResultsBlock() {
  return (
   <div className={styles["results-block-wrapper"]}>
    <Card>
      <div className={styles["results-block-content"]}>
        <ResultEntry>Test</ResultEntry>
      </div>
    </Card>
    </div>
  );
}

export default ResultsBlock;
