import React from 'react'

const Marketing = () => {
   return (
      <main className="main" role="main">
         <div className="bg-white py-7">
            <div className="container">
               <div className="row">
                  <div className="col-md-10 mx-auto">
                     
                  </div>
               </div>
               <div className="row pt-5">
                  <div className="col-md-4">
                     <div>
                     <a href="https://robust.bootlab.io/pages-landing.html" className="link-unstyled">
                        <img src="img/portada-ok1.jpeg" className="img-fluid shadow-sm" alt="Landing"/>
                     </a>
                     <h5 className="mt-4">Vacuna COVID-19</h5>
                     <p>
                        Ve el calendario de Vacunación para el COVID-19.
                     </p>
                     <p>
                        <a href="https://robust.bootlab.io/pages-landing.html">Ingresar a la página ›</a>
                     </p>
                     </div>
                  </div>
                  <div className="col-md-4">
                     <div>
                     <a href="https://robust.bootlab.io/pages-dashboard.html" className="link-unstyled">
                        <img src="img/coronavirus.jpg" className="img-fluid shadow-sm" alt="Dashboard"/>
                     </a>
                     <h5 className="mt-4">Coronavirus COVID-19</h5>
                     <p>
                        
                     </p>
                     <p>
                        <a href="https://robust.bootlab.io/pages-dashboard.html">Explore Pages </a>
                     </p>
                     </div>
                  </div>
                  <div className="col-md-4">
                     <div>
                     <a href="https://robust.bootlab.io/pages-general.html" className="link-unstyled">
                        <img src="img/medidas1.jpeg" className="img-fluid shadow-sm" alt="Pages"/>
                     </a>
                     <h5 className="mt-4">Medidas del Gobierno</h5>
                     <p>
                        Discover our wide variety of pages including blog, about, contact and error pages.
                     </p>
                     <p>
                        <a href="https://robust.bootlab.io/pages-general.html">Explore Pages ›</a>
                     </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <div className="bg-light pt-5 mb-2">
            <div className="container">
               <div className="row">
                  <div className="col-md-4 mr-auto align-self-center mb-3">
                     <div className="my-3">
                     </div>
                     <div className="my-4">
                     <h3>Podés acceder desde tu celular.</h3>
                     <p className="text-dark">
                        Podés ingresar a la página, para agentar agendar turno con especialistas solo con tu celular.
                     </p>
                     </div>
                     <div className="my-3">
                     </div>
                  </div>
                  <div className="col-md-5 ml-auto mt-4">
                     <img src="/img/ipad.png" className="img-fluid" alt="iPad"/>
                  </div>
               </div>
            </div>
         </div> 
      </main>
   )
}

export default Marketing