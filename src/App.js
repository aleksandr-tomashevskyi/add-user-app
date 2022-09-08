import React, {useState} from 'react';
import './App.css';
import FormBlock from './components/FormBlock'
import ResultsBlock from './components/ResultsBlock'

function App() {
  const [userData, setUserData] = useState('');

    function saveEntryHandler(newData){
      setUserData((prevData)=>{
        return [newData, ...prevData];
      })
  }

  return (
    <div className="App">
      <header className="App-header">
        <FormBlock onSaveEntry = {saveEntryHandler}></FormBlock>
        <ResultsBlock addEntryData = {userData}></ResultsBlock>
      </header>
    </div>
  );
}

export default App;
