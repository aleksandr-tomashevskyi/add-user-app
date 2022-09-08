import Card from "./UI/Card";
import UserItem from "./Results/UserItem";
import styles from "./ResultsBlock.module.css";

function ResultsBlock(props) {
  // console.log(props.addEntryData)
  let dataIsPresent = false;
  if(props.addEntryData){
    dataIsPresent = true;
  }


  return (
   <div className={styles["results-block-wrapper"]}>
    <Card>
      <div className={styles["results-block-content"]}>
        {dataIsPresent && props.addEntryData.map((person)=>(
          <UserItem userName = {person.name} userAge = {person.age}></UserItem>
        ))}
        
      </div>
    </Card>
    </div>
  );
}

export default ResultsBlock;
