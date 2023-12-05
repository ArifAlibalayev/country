import { Route, Routes } from 'react-router-dom';
import './App.css';
import Mainlayout from './layout/Mainlayout';
import Mainpage from './pages/Mainpage';
import Details from './pages/Detailpage';

function App() {
  return (
    <>
    <Routes>
        <Route element={<Mainlayout></Mainlayout>} >

        <Route path="/" element={<Mainpage/>} />
        <Route path="/Details" element={<Details></Details>} />
       

        </Route>
      </Routes>
    </>
  );
}

export default App;
