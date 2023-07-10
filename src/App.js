import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Profile from './pages/Profile';
import Navbar from './components/Navbar';

function App() {
  const [name, setName] = useState('Yeonju Seo');

  const handleChangeName = (newName) => {
    console.log(newName);
    setName(newName);
  };
  return (
    <Router>
      <div className="App">
        <Navbar name={name} />
        <h5>App Component: {name}</h5>
        <Routes>
          <Route
            path="/"
            exact
            element={<Main name={name} handleChangeName={handleChangeName} />}
          />
          <Route path="/profile" exact element={<Profile name={name} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
