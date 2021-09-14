import './App.scss';

import team from "./data/team";
import EmployeeBox from "./components/EmployeeBox/EmployeeBox";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      </header>

      <main>
        <EmployeeBox teamArr={team} />
      </main>
    </div>

    // tracker --> employee (10) --> names, role, counter
  );
}

export default App;
