import './App.css'
import Forum from './Components/Pages/Forum'
import Reg from './Components/Pages/Reg'
import TestCloud2 from './Components/Pages/testCloud2';
import { Route, Routes } from 'react-router-dom';
import NavBars from './Components/NavBar/NavBars'


const App = () => {

    return (
      <div className="App">
        <NavBars/>
        <Routes>
            <Route exact path="/forum" element={<Forum/>} />
            <Route exact path="/reg" element={<Reg/>} />
            <Route exact path="/page2" element={<TestCloud2/>} />
        </Routes>
      </div>
    );
  
};



export default App;
