import Home from "./Home";
import { BrowserRouter, Router, Route } from 'react-router-dom';
import Page from "./Page";
import Products from "./Products";
import Header from "./Header";
import './style.css';



function App() {
  return (
    <BrowserRouter>


    <Header />
    <Router>
      <Route path='/' element={<Home />} />
      <Route path='/Page' element={<Page />}/>
      <Route path='/Products/:params' element={<Products />}/>

    </Router>
    

  </BrowserRouter>
    

  );
}

export default App;
