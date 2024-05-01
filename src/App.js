import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Employees from './pages/Employees';
import Header from './components/header';
import Customers from './pages/Customers';
import DictionaryPage from './pages/Dictionary';
import Definition from './pages/Definition';
import NotFound from './components/NotFound';
import Customer from './pages/Customer';

function App() {
  
  return (
   
      <BrowserRouter>
         <Header>
            <Routes>
              <Route path='/employees' element={<Employees />} />
              <Route path='/customers' element={<Customers />} />
              <Route path='customers/:id' element={<Customer />} />
              <Route path='/dictionary' element={<DictionaryPage />} />
              <Route path='dictionary/:search' element={<Definition />} />
              <Route path='/404' element={<NotFound/>} />
              <Route path='*' element={<NotFound/>} />
            </Routes>
          </Header>
      </BrowserRouter>
    
  );
}

export default App;
 