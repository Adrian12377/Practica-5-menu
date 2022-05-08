import {Link, Outlet} from 'react-router-dom';

function Barra() {
    return (
      <div>
      <ul>
       
        <li>
        <Link to='/menu1'>
          Circulo
        </Link>
          
        </li>

        <li>
        <Link to='/menu3'>
          Cuadro
        </Link>
          
        </li>

        <li>
        <Link to='/menu2'>
          Contact
        </Link>
          
        </li>
      </ul>

      <section>
        <Outlet/>
      </section>
      </div>
    );
  }
  
  export default Barra;