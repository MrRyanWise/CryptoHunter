import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Header from './components/Header'; 
import CoinPage from './Pages/CoinPage';
import Homepage from './Pages/Homepage';
import ReactDOM from 'react-dom';
import { makeStyles } from '@mui/material';
  
function App() {

  return (
   <BrowserRouter>
      <div 
         style={{
          backgroundColor:"#14161a",
          color:"white",
          minHeight:"100vh",
      }}>
        <Header />
        <Routes>
        <Route path="/" element={<Homepage/>} exact/>
        <Route path="/coins/:id" element={<CoinPage />} />
        </Routes>
      </div>
   </BrowserRouter>
  );
}

export default App;
