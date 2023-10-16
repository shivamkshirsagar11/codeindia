import mylogo from './media/codeindia_logo.png';
import './App.css';
import { BrowserRouter as BR, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from './components/home/Home';
function App() {
  return (
    <>
    <BR>
   <Routes>
    <Route path="/" element={<Home props={{logo:mylogo}}/>}/>
    </Routes> 
    </BR>
    <ToastContainer autoClose={3000} />
    </>
  );
}

export default App;
