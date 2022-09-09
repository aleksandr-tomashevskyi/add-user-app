import React, {useState} from 'react';
import './App.css';
import FormBlock from './components/FormBlock'
import ResultsBlock from './components/ResultsBlock'
import PopupOverlay from './components/UI/PopupOverlay';

function App() {
  const [userData, setUserData] = useState('');

    function saveEntryHandler(newData){
      setUserData((prevData)=>{
        return [newData, ...prevData];
      })
  }

  const [isValid, setValidity] = useState(true);

  function checkValidity(){
    setValidity(!isValid);
  }

  return (
    <div className="App">
      <header className="App-header">
        <FormBlock onSaveEntry = {saveEntryHandler}></FormBlock>
        <ResultsBlock addEntryData = {userData}></ResultsBlock>
        <button onClick={checkValidity}>Check Validity</button>
        {!isValid && <PopupOverlay popupTrigger={checkValidity}/>}
        {/* <PopupOverlay showFormTrigger={isValid}></PopupOverlay> */}
      </header>
    </div>
  );
}

export default App;
