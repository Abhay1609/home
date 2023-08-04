import logo from './logo.svg';
import './App.css';

import NavBar from './Components/nav';
import Hero from './Components/hero';
import Card from './Components/card';
import About from './Components/about';
import Query from './Components/query';
import { BrowserRouter,Routes,Route } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <NavBar/>
      
      

    <BrowserRouter>
    <Routes>
    

      <Route exact path='/' element = {<Hero />}></Route>
      <Route exact path='/card' element = {<Card />}></Route>
      <Route exact path='/query' element = {<Query />}></Route>
      

    
  
    </Routes>
    </BrowserRouter>
    <About />
    </div>
  );
}

export default App;
