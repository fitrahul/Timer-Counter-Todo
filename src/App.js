
import './App.css';
import Counter from './components/Counter';
import Timer from './components/Timer';
import Todo from './components/Todo';

function App() {
  return (
    <div className="App">
      <Timer />
      <Counter />
      <Todo />
    </div>
  );
}

export default App;
