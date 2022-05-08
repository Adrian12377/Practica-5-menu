import {Link, Outlet} from 'react-router-dom';

function Barra() {
    return (
      <div>
      <ul>
       
        <li>
        <Link to='/Menu1'>
          Menu1
        </Link>
          
        </li>

        <li>
        <Link to='/Menu2'>
          Menu2
        </Link>
          
        </li>

        <li>
        <Link to='/Menu3'>
          Menu3
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