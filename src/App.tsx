import { BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import RouterCom from './Router';
// import Navbar from './components/Header'
import { HelmetProvider } from 'react-helmet-async';

function App() {

  return (
    <HelmetProvider>
      <Router>
        <RouterCom />
      </Router>
    </HelmetProvider>
    
  )
}

export default App
