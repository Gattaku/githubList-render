import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Root from './components/Root';
import Login from './components/Login';
import Information from './components/Information';


function App() {
  return (
    <div className="App">
      {/* Hello React */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Root />} />
          <Route path="/login" element={<Login />} />
          <Route path="/information" element={<Information />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
