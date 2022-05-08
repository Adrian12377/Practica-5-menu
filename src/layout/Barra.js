import {Link, Outlet} from 'react-router-dom';

function Barra() {
    return (
      <div>
      <ul>
       
        <li>
        <Link to='/menu1'>
          Menu1
        </Link>
          
        </li>

        <li>
        <Link to='/menu3'>
          Menu3
        </Link>
          
        </li>

        <li>
        <Link to='/menu2'>
          Menu2
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