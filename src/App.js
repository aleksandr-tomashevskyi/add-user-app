import './App.css';
import FormBlock from './components/FormBlock'
import ResultsBlock from './components/ResultsBlock'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FormBlock></FormBlock>
        <ResultsBlock></ResultsBlock>
      </header>
    </div>
  );
}

export default App;
