import './App.css';
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import LandingPage from './components/LandingPage'
import Signup from './components/Signup'
import Login from './components/Login'
import Account from './components/Account'
import Deposit from './components/Deposit'
import Withdraw from './components/Withdraw'
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Header />
    <main style={{minHeight: "83vh"}}>
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/account' element={<Account/>}/>
        <Route path='/deposit' element={<Deposit/>} />
        <Route path='/withdraw' element={<Withdraw/>} /> 
      </Routes>
    </main>
   
     <Footer />
    </>
  );
}

export default App;
