import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import TableCrud from './components/TableCrud';
import Form from './components/Form';



function App() {
  return (
    <Router>
    <div className='App'>
      
      <Navbar/>
      <TableCrud/>
     
      
      
      

     

    </div>
    </Router>
    
  );
}

export default App;
