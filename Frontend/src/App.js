import './Css/App/App.css'
import Forum from './Components/Pages/Forum'
import Reg from './Components/Pages/Reg'
import { Route, Routes } from 'react-router-dom';
import NavBars from './Components/NavBar/NavBars'


const App = () => {

    return (
      <div className="App">
        <NavBars/>
        <Routes>
            <Route exact path="/forum" element={<Forum/>} />
            <Route exact path="/reg" element={<Reg/>} />
        </Routes>
      </div>
    );
  
};



export default App;
