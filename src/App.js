import Menu1 from './components/Menu1';
import Menu2 from './components/Menu2';
import Menu3 from './components/Menu3';
import Barra from './layout/Barra';

import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter> 
    <Routes>


    <Route path='/' element={<Barra/>}>
      <Route path='Circulo' element={  <Menu1/>   }     />
      <Route path='Contacto' element={  <Menu2/>   }     />
      <Route path='Cuadro' element={  <Menu3/>   }     />

    </Route>





    </Routes>
    </BrowserRouter>
  );
}

export default App;