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
         
         <div className="bg-white py-7">
            <div className="container">
               <div className="row mb-6">
                  <div className="col-md-3 ml-auto">
                     <h2>Noticias</h2>
                  </div>
                  <div className="col-md-5 mr-auto">
                     <p className="lead text-dark" style="text-align: justify ;">
                     Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                     Consequuntur hic commodi, fugiat aspernatur adipisci est
                     accusantium modi expedita recusandae distinctio eligendi
                     officiis ducimus odit et deserunt fuga labore facilis ipsa!
                     </p>
                  </div>
               </div>

               <div className="row mt-5 bg">
                  <a className="col-md-4 img-fluid shadow-sm">
                     <div className="media">
                        <div className="icon mr-3">
                           <i className="far fa-id-badge"></i>
                        </div>
                        <div className="media-body">
                           <h3 className="h4">Salud confirma el cuarto caso de viruela símica en el país</h3>
                           <p className="text-dark" style="text-align:justify;">
                           Dio positivo el análisis que realizó ANLIS- Malbrán de un residente de la ciudad mendocina de
                           Godoy Cruz con antecedente de viaje a España. A la fecha, no se han registrado casos secundarios
                           a partir de los cuatro casos confirmados.
                           </p>
                        </div>
                     </div>
                  </a>
                  <a href="" className="col-md-4 img-fluid shadow-sm">
                     <div className="media">
                     <div className="icon mr-3 bg-warning">
                        <i className="far fa-hand-scissors"></i>
                     </div>
                     <div className="media-body">
                        <h3 className="h4">Argentina recibió hoy 1.998.600 vacunas de Moderna</h3>
                        <p className="text-dark" style="text-align:justify ;">
                           Con este embarque el Plan Estratégico de Vacunación contra el SARS-CoV-2
                           sigue fortaleciéndose en las jurisdicciones superando ya los 123 millones 
                           de dosis recibidas de diferentes laboratorios proveedores desde que inició 
                           la campaña de vacunación.
                        </p>
                     </div>
                     </div>
                  </a>
                  <a href="" className="col-md-4 img-fluid shadow-sm">
                     <div className="media">
                        <div className="icon mr-3 bg-danger">
                           <i className="far fa-comments"></i>
                        </div>
                        <div className="media-body">
                           <h3 className="h4">Salud distribuyó 741.340 vacunas de Moderna a todo el país</h3>
                           <p className="text-dark text-left" style="text-align: justify ;">
                           La cartera sanitaria envió, además, otras 10.000 dosis pediátricas de Pfizer a la provincia de Chaco.
                           </p>
                        </div>
                     </div>
                  </a>
               </div>
            </div>
         </div>
      </main>
   )
}

export default Marketing