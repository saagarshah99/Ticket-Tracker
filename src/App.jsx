import './App.scss';

import team from "./data/team";
// import EmployeeBox from "./components/EmployeeBox/EmployeeBox";
import TrackerBox from './components/TrackerBox/TrackerBox';

function App() {
  return (
    <div className="App">
        <h1 className="App__header">Tracker App</h1>
        {/* <EmployeeBox teamArr={team} /> */}
        <TrackerBox teamArr={team} />
    </div>

    // tracker --> employee (10) --> names, role, counter
  );
}

export default App;
