import './App.css';
import CustomMessage from './CustomMessage';

function App() {
  const customMessage = 'Hello!, how are you?';

  return (
    <div className="App">
      <CustomMessage message={customMessage} />
    </div>
  );
}

export default App;
