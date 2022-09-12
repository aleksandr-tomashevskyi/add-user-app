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
    const validationResult = checkEntryValidity(newData);
    if(!validationResult){
      setUserData((prevData) => {
        return [newData, ...prevData];
      });
    } else{
      setValidationResults(validationResult); // returns string with error message
    }
  }

  function closePopup(){
    setValidity(!isValid); //needed to close popup
  }

  function checkIfNum(data){
    return /\d/.test(data.name);
  }

  function symbolsFilter(data){
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    console.log(data.name);
    console.log(specialChars.test(data.name));
    return specialChars.test(data.name);
  }


  function checkEntryValidity(newData) {
    if(!newData.name || !newData.age){ // check for empty string
      setValidity(!isValid); // needed to open popup, isValid is then transferred down thru popupTrigger
      return 'Sorry, empty strings are not allowed';
    } else if(symbolsFilter(newData) || checkIfNum(newData)){ // check for spec chars or numeric values
      setValidity(!isValid); // needed to open popup, isValid is then transferred down thru popupTrigger
      return 'Please, enter only alphabetic symbols';
    }else{
      return '';
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
