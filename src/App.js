import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Employees from './pages/Employees';
import Header from './components/header';
import Customers from './pages/Customers';
import DictionaryPage from './pages/Dictionary';
import Definition from './pages/Definition';

function App() {
  
  return (
   
      <BrowserRouter>
         <Header>
            <Routes>
              <Route path='/employees' element={<Employees />} />
              <Route path='/customers' element={<Customers />} />
              <Route path='/dictionary' element={<DictionaryPage />} />
              <Route path='definition' element={<Definition />} />
              <Route path='definition/:search' element={<Definition />} />
            </Routes>
          </Header>
      </BrowserRouter>
    
  );
}

export default App;
 