import { BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import RouterCom from './Router';
// import Navbar from './components/Header'

function App() {

  return (
    <>
    <div className="App"></div>
      {/* <Navbar /> */}
      <Router>
        <RouterCom />
      </Router>
    </>
  )
}

export default App
