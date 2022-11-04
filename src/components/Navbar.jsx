import React from 'react'
import propTypes from 'prop-types'

const Navbar = (props) => {
   const {text, text2, text3, text4, text5} = props
   
   return (
      <header>

         <nav class="navbar navbar-lg navbar-expand-lg navbar-transparant navbar-dark navbar-absolute w-100">
            <div class="container">
               <a class="navbar-brand" href="https://robust.bootlab.io/index.html">Turnos.</a>
               <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
               <span class="navbar-toggler-icon"></span>
               </button>

               <div class="collapse navbar-collapse" id="navbarCollapse">
               <ul class="navbar-nav ml-auto">
                  <li class="nav-item active">
                     <a class="nav-link" href="https://robust.bootlab.io/index.html">Inicio</a>
                  </li>
                  <li class="nav-item dropdown">
                     <a class="nav-link" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                     Información
                     </a>
                     
                  </li>
                  
                  <li class="nav-item dropdown">
                        <a class='nav-link align-items-top ' href='#' role='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
                           <p>$usuario</p>
                        </a>;

                        
                        <div class="dropdown-menu">;
                              <a class='dropdown-item' href='components-bootstrap.html'>usuario</a>;
                              <a class="dropdown-item" href="components-bootstrap.html">Historial Médico</a>;
                              <a class="dropdown-item" href="components-robust.html">Mis Turnos</a>;
                              <a class="dropdown-item" href="components-bootstrap.html">"           "</a>;
                              <a class="dropdown-item" href="../PHP/login/salir.php">Cerrar Sesión</a>;
                        </div>;
                  </li>
               </ul>  
               </div>
            </div>
         </nav>

      </header>
            )
}

Navbar.propTypes = {
   text: propTypes.string.isRequired,
   text2: propTypes.string.isRequired,
   text3: propTypes.string.isRequired,
   text4: propTypes.string.isRequired,
   text5: propTypes.string.isRequired
}

export default Navbar