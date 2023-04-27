import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css'
import Mainpage from './pages/Mainpage';


function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Mainpage/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App