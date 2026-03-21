import './App.css';
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
import Getproducts from './components/Getproducts';
import Addproducts from './components/Addproducts';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Makepayment from './components/Makepayment';
import Notfound from './components/Notfound';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <Router>
      <div className="App">
      <header className="App-header">
        <h1 className='text-danger'>welcome to sokogarden</h1>
       
      </header>
      {/* Below is our different routes together with the rendered components */}
      <Routes>
        <Route path='/'element={<Getproducts />} />
        <Route path='/addproducts'element={<Addproducts/>}/>
        <Route path='/signup'element={<Signup/>}/>
        <Route path ='/signin'element={<Signin/>}/>
        <Route path ='*'element={<Notfound/>}/>
        <Route path='/makepayment'element={<Makepayment/>} />
      </Routes> 
    </div>
    </Router>
  );
}

export default App;
