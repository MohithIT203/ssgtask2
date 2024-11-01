
import Home from "./Components/home.jsx";
import Login from './Components/login.jsx';
import { BrowserRouter ,Routes ,Route} from 'react-router-dom';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </div>

  );
}
export default App