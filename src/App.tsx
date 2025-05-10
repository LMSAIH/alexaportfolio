import './App.css'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from './pages/Home';


function App() {

  return (
    <Router >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<h1 className="text-3xl font-bold underline">About</h1>} />
        <Route path="/contact" element={<h1 className="text-3xl font-bold underline">Contact</h1>} />
      </Routes>
    </Router>
  )
}

export default App
