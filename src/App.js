import './index.css';
import { Route,Routes,BrowserRouter } from 'react-router-dom';
import Dashboard from './components/dashboard';
import SignIn from './pages/Signin';
import Customers from './components/customer/Customers';
import Billfrom from './components/bill/Billform';

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<SignIn/>}></Route>
            <Route path='/signin' element={<SignIn/>}></Route>
            <Route path='/dashboard' element={<Dashboard/>}>
              <Route path='/dashboard' element={<Billfrom/>}></Route>
              <Route path='/dashboard/customer' element={<Customers/>}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
