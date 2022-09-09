import React, { useState } from "react";
import "./App.css";
import FormBlock from "./components/FormBlock";
import ResultsBlock from "./components/ResultsBlock";
import PopupOverlay from "./components/UI/PopupOverlay";
import PopupWindow from "./components/UI/PopupWindow";

function App() {
  const [userData, setUserData] = useState("");
  const [isValid, setValidity] = useState(true);
  const [validationResults, setValidationResults] = useState('');

  function saveEntryHandler(newData) {
    if(checkEntryValidity(newData)){
      setUserData((prevData) => {
        return [newData, ...prevData];
      });
    } else{
      setValidationResults('Sorry, empty strings are not allowed');
    }
  }

  function closePopup(){
    setValidity(!isValid);
  }


  function checkEntryValidity(newData) {
    if(!newData.name || !newData.age){
      setValidity(!isValid);
      return false;
    } else{
      return true;
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <FormBlock onSaveEntry={saveEntryHandler}></FormBlock>
        <ResultsBlock addEntryData={userData}></ResultsBlock>
        {!isValid && (
          <PopupOverlay popupTrigger={closePopup}>
            <PopupWindow message={validationResults}/>
          </PopupOverlay>
        )}
      </header>
    </div>
  );
}

export default App;
