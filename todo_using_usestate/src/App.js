import './App.css';
import TodoList from './components/TodoList';
const heading={
  textAlign:"center",
  backgroundColor:"red",
  color:'black'
}

function App() {
  return (
    <div className="App">

      
     <h1 style={heading}>Todo Application</h1>
  
     <TodoList/>
    </div>
  );
}

export default App;