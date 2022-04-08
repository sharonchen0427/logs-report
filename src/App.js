import './App.css';
import Login from "./screens/login";
import NutritionTable from "./components/nutritionTable";
import Users from "./screens/users";

function App() {
  return (
    <div className="App">
        <Login/>
        <NutritionTable />
        <Users />
    </div>
  );
}

export default App;
