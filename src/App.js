import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;