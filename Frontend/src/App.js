import './Css/App.css'
import './Css/Postform.css'
import './Css/SignUp.css'
import './Css/SignIn.css'
import './Css/UnsolvedPosts.css'
import './Css/SolvedPosts.css'
import './Css/UserSidebar.css'
import './Css/Forum.css'
import SignUp from './Components/Registration/signUp'
import SignIn from './Components/Registration/signIn'
import Forum from './Pages/forum'
import { Route, Routes } from 'react-router-dom';
import NavBars from './Components/NavBar/NavBars'


const App = () => {

    return (
      <div className="App">
        <NavBars/>
        <Routes>
            <Route exact path="/forum" element={<Forum/>} />
            <Route exact path="/signUp" element={<SignUp/>} />
            <Route exact path="/signIn" element={<SignIn/>} />
        </Routes>
      </div>
    );
  
};



export default App;
