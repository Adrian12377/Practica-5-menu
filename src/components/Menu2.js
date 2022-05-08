
function Menu2() {
    return (
  
      <>
          <h1>Contacto</h1>
          <h3>Nombre</h3>
          <input type="text" name="Nombre"/><br></br><br></br>
          <h3>Correo Electronico</h3>
          <input type="text" name="Correo-Electronico"/><br></br><br></br>
          <h3>Mensaje</h3>
          <input type="text" name="Mensaje"  minlength="50" maxlength="25" size="50" /><br></br><br></br>
          <button type="button" background-color= "gray" >Send text</button><br></br>
  
      </>
      
      )
  }
  export default Menu2;