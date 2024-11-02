
import Home from "./Components/home.jsx";
import Login from './Components/login.jsx';
import { BrowserRouter ,Routes ,Route} from 'react-router-dom';
import SignupForm from "./Components/signup.jsx";
import Bike from "./Components/bike.jsx";
import CarDropdowns from "./Components/bike1.jsx";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<SignupForm/>}/>
            <Route path='/bike' element={<Bike/>}/>
        </Routes>
      </BrowserRouter>
    </div>

  );
}
export default App