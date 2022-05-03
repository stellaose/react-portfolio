import './App.scss';
import { Routes, Route} from 'react-router-dom';

import About from './Pages/About';
import Contact from './Pages/Contact';
import Layout from './Pages/Layout';
import Landing from './Pages/Landing';
import Skills from './Pages/Skills';
import Work from './Pages/Work'

function App() {
  return (
    <>
      <Routes>
        <Route path = '/' element = {<Layout/>}> 
          <Route index element = {<Landing/>} />
          <Route path='/about' element = {<About/>} />
          <Route path='/contact' element = {<Contact/>} />
          <Route path='/work' element = {<Work/>} />
          <Route path='/skills' element = {<Skills/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
