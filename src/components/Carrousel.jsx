import "../../public/css/style.css"

const Carrousel = () => {
   return (
      <section id="hero">
         <div class="intro py-5 py-lg-9 position-relative text-white">
            <div class="bg-overlay-primary">
               <img src="img/hospital-distrital-8.jpg" class="img-fluid img-cover" alt="Robust UI Kit" />
            </div>
            <div id="contenido" class="intro-content py-8">
               <div class="container">
                  <div class="row align-items-center">
                     <div class="col-12 col-sm-10 col-md-8 col-lg-6 mx-auto text-center">
                        <h1 class="my-3 display-4 d-none d-lg-inline-block">Turnos Formosa</h1>
                        <span class="h1 my-3 d-inline-block d-lg-none">Turnos Formmosa</span>
                        <p class="lead mb-3">En esta página usted podrá sacar turnos de manera online desde la comodidad de su casa.</p>
                        <a class='btn btn-success btn-lg mr-lg-2 my-1' href='../Turnos/turnos2.html' role='button'>Solicitar un Turno</a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Carrousel