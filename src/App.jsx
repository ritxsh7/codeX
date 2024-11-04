import { useState, useEffect } from 'react';import Home from './pages/Home';
import { Route,Routes } from 'react-router-dom';
import Editor from './pages/Editor';
import Header from './component/Header';
function App() {
  const [darkMode, setDarkMode] = useState(false);

  

  // Toggle dark mode
  const toggleMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <div className="w-full min-h-screen dark:bg-black bg-white">
        <Header darkMode={darkMode}  toggleMode={toggleMode}/>
        <Routes>
        <Route path="/" element={<Home darkMode={darkMode} toggleMode={toggleMode} />} /> 
        <Route path="/Language/:language" element={<Editor/>} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
