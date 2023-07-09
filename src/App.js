import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Profile from './pages/Profile';


function App() {

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<Main />} />
          <Route path="/profile" exact element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
