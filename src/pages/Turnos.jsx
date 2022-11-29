const Turnos = () => {
    return (
        <div>
          <meta httpEquiv="content-type" content="text/html; charset=UTF-8" />
          <meta charSet="utf-8" />
          <title>Turnos.</title>
          {/* SEO Meta Tags*/}
          <meta name="description" content="Around - Multipurpose Bootstrap Template" />
          <meta name="keywords" content="bootstrap, business, consulting, coworking space, services, creative agency, dashboard, e-commerce, mobile app showcase, multipurpose, product landing, shop, software, ui kit, web studio, landing, html5, css3, javascript, gallery, slider, touch, creative" />
          <meta name="author" content="Createx Studio" />
          {/* Viewport*/}
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          {/* Favicon and Touch Icons*/}
          <link rel="apple-touch-icon" sizes="180x180" href="https://around.createx.studio/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="https://around.createx.studio/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="https://around.createx.studio/favicon-16x16.png" />
          <link rel="manifest" href="https://around.createx.studio/site.webmanifest" />
          <link rel="mask-icon" color="#5bbad5" href="https://around.createx.studio/safari-pinned-tab.svg" />
          <meta name="msapplication-TileColor" content="#766df4" />
          <meta name="theme-color" content="#ffffff" />
          <link rel="stylesheet" href="/public/css/Turnos.css" />
          <main className="page-wrapper">
            {/* Navbar Floating light for Index page only*/}
            {/* Remove "navbar-sticky" class to make navigation bar scrollable with the page.*/}
            <header className="header navbar  navbar-floating navbar-sticky navbar-stuck" data-fixed-element style={{backgroundColor: 'rgb(66, 142, 223)'}}>
              <nav className="navbar navbar-lg navbar-expand-lg navbar-sticky navbar-dark navbar-absolute w-100" style={{backgroundColor: 'rgb(66, 142, 223)'}}>
                <div className="container">
                  <a className="navbar-brand" href="/pagina_principal/index.php">Turnos.</a>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                  </button>
                  <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav ml-auto">
                      <li className="nav-item active">
                        <a className="nav-link" href="index.html">Inicio</a>
                      </li>
                      <li className="nav-item dropdown">
                        <a className="nav-link" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                          Información
                        </a>
                      </li>
                      <li className="nav-item dropdown">
                        <a className="nav-link" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                          Historial Médico
                        </a>
                      </li>
                      <li className="nav-item dropdown">
                        <a className="nav-link " href="#" role="button" aria-haspopup="true" aria-expanded="true">
                          Mis Turnos
                        </a>
                      </li>
                    </ul>
                    <ul className="navbar-nav ms-auto">
                      <li>
                        <a className="nav-link" href="https://themes.getbootstrap.com/product/robust-ui-kit-dashboard-landing/" target="_blank">
                          <img src="/proy_int/Robust UI Kit_archivos/img/usuario.png" alt="" width="40px" className="shadow-sm" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </header>
            {/* Page content*/}
            {/* Intro*/}
            <section className=" align-items-center position-relative bg-size-cover bg-position-center min-vh-100 overflow-hidden pt-6 pb-lg-5" style={{backgroundColor: 'rgb(66, 142, 223)'}}>
              <section className="py-1 py-md-6 pb-lg-1 mb-2 " style={{backgroundColor: 'rgb(66, 142, 223)'}}>
                <div className="container pb-3 pt-4 pb-lg-2 bg-light border rounded-3">
                  <div className="row justify-content-center mb-4 pb-2">
                    <div className="col-xl-6 col-lg-7 col-md-8">
                      <h2 className="h1 mb-4 text-center">Escoja una<span className="bg-faded-primary rounded text-primary px-3 py-2">especialidad</span></h2>
                      <p className="text-muted text-center"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, voluptatem placeat impedit
                        cupiditate culpa ducimus nemo quae aperiam consequuntur voluptate, voluptatum reiciendis modi praesentium aspernatur sit id 
                        quos commodi mollitia!</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6">
                      <ul className="nav nav-tabs media-tabs justify-content-center justify-content-lg-start" role="tablist">
                        <li className="nav-item mb-3" style={{width: '16.5rem'}}>
                          <a className="nav-link me-2 active" href="#pediatria" data-bs-toggle="tab" role="tab">
                            <div className="d-flex align-items-center"><img className="rounded" src="img/icon/pediatra.png" alt="User Account" width={60} />
                              <div className="w-100 ps-2 ms-1">
                                <div className="d-flex justify-content-between align-items-center">
                                  <div className="fs-sm pe-1">Pediatría</div><i className="ai-chevron-right lead ms-2 me-1" />
                                </div>
                              </div>
                            </div>
                          </a>
                        </li>
                        <li className="nav-item mb-3" style={{width: '16.5rem'}}>
                          <a className="nav-link me-2" href="#cardiologia" data-bs-toggle="tab" role="tab">
                            <div className="d-flex align-items-center">
                              <img className="rounded" src="img/icon/enfermero.png" alt="Portfolio" width={60} />
                              <div className="w-100 ps-2 ms-1">
                                <div className="d-flex justify-content-between align-items-center">
                                  <div className="fs-sm pe-1">Cardiología</div><i className="ai-chevron-right lead ms-2 me-1" />
                                </div>
                              </div>
                            </div>
                          </a>
                        </li>
                        <li className="nav-item mb-3" style={{width: '16.5rem'}}>
                          <a className="nav-link me-2" href="#obstetricia" data-bs-toggle="tab" role="tab">
                            <div className="d-flex align-items-center"><img className="rounded" src="img/icon/doctor.png" alt="Obstetricia" width={60} />
                              <div className="w-100 ps-2 ms-1">
                                <div className="d-flex justify-content-between align-items-center">
                                  <div className="fs-sm pe-1">Obstetricia</div><i className="ai-chevron-right lead ms-2 me-1" />
                                </div>
                              </div>
                            </div>
                          </a>
                        </li>
                        <li className="nav-item mb-3" style={{width: '16.5rem'}}>
                          <a className="nav-link me-2" href="#kinesiologia" data-bs-toggle="tab" role="tab">
                            <div className="d-flex align-items-center"><img className="rounded" src="img/icon/cirujano.png" alt="Kinesiología" width={60} />
                              <div className="w-100 ps-2 ms-1">
                                <div className="d-flex justify-content-between align-items-center">
                                  <div className="fs-sm pe-1">Kinesiología</div><i className="ai-chevron-right lead ms-2 me-1" />
                                </div>
                              </div>
                            </div>
                          </a>
                        </li>
                        <li className="nav-item mb-3" style={{width: '16.5rem'}}>
                          <a className="nav-link me-2" href="#odontologia" data-bs-toggle="tab" role="tab">
                            <div className="d-flex align-items-center"><img className="rounded" src="img/icon/enfermero(1).png" alt="Odontología" width={60} />
                              <div className="w-100 ps-2 ms-1">
                                <div className="d-flex justify-content-between align-items-center">
                                  <div className="fs-sm pe-1">Odontología</div><i className="ai-chevron-right lead ms-2 me-1" />
                                </div>
                              </div>
                            </div>
                          </a>
                        </li>
                        <li className="nav-item mb-3" style={{width: '16.5rem'}}>
                          <a className="nav-link me-2" href="#oftalmologia" data-bs-toggle="tab" role="tab">
                            <div className="d-flex align-items-center"><img className="rounded" src="img/icon/enfermero.png" alt="Oftalmología" width={60} />
                              <div className="w-100 ps-2 ms-1">
                                <div className="d-flex justify-content-between align-items-center">
                                  <div className="fs-sm pe-1">Oftalmología</div><i className="ai-chevron-right lead ms-2 me-1" />
                                </div>
                              </div>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-6">
                      <div className="tab-content">
                        <div className="tab-pane fade show active" id="pediatria">
                          <div className="row text-center text-sm-start">
                            <div className="col-sm-6 mb-3 mb-sm-0">
                              <h3 className="h5 mb-4">Hospitales Disponibles</h3>
                              <ul className="list-unstyled">
                                <li className="mb-3"><a className="fw-medium text-decoration-none" href="#calendario">Sanatorio González Lelong</a></li>
                                <li className="mb-3"><a className="fw-medium text-decoration-none" href="#calendario">Hospital Distrital N°8</a></li>
                                <li className="mb-3"><a className="fw-medium text-decoration-none" href="#calendario">Hospital La Madre y el Niño</a></li>
                                <li className="mb-3"><a className="fw-medium text-decoration-none" href="#calendario">Hospital Central</a></li>
                                <li className="mb-3"><a className="fw-medium text-decoration-none" href="#calendario">Sanatorio Formosa</a></li>
                                <li className="mb-3"><a className="fw-medium text-decoration-none" href="#calendario">Clinica Dr. Jorge Versalovich</a></li>
                                <li className="mb-3"><a className="fw-medium text-decoration-none" href="#calendario">Centro de Salud Republica Argentina</a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="tab-pane fade" id="cardiologia">
                          <div className="row text-center text-sm-start">
                            <div className="col-sm-6 mb-3 mb-sm-0">
                              <h3 className="h5 mb-4">Hospitales Disponibles</h3>
                              <ul className="list-unstyled">
                                <li className="mb-3"><a className="fw-medium text-decoration-none" href="#calendario">Sanatorio González Lelong</a></li>
                                <li className="mb-3"><a className="fw-medium text-decoration-none" href="#calendario">Hospital Distrital N°8</a></li>
                                <li className="mb-3"><a className="fw-medium text-decoration-none" href="#calendario">Hospital La Madre y el Niño</a></li>
                                <li className="mb-3"><a className="fw-medium text-decoration-none" href="#calendario">Hospital Central</a></li>
                                <li className="mb-3"><a className="fw-medium text-decoration-none" href="#calendario">Sanatorio Formosa</a></li>
                                <li className="mb-3"><a className="fw-medium text-decoration-none" href="#calendario">Clinica Dr. Jorge Versalovich</a></li>
                                <li className="mb-3"><a className="fw-medium text-decoration-none" href="#calendario">Centro de Salud Republica Argentina</a></li>
                              </ul>
                            </div>  
                          </div>
                        </div>
                        <div className="tab-pane fade" id="obstetricia">
                          <div className="row text-center text-sm-start">
                            <div className="col-sm-6 mb-3 mb-sm-0">
                              <h3 className="h5 mb-4">Hospitales Disponibles</h3>
                              <ul className="list-unstyled">
                                <li className="mb-3"><a className="fw-medium text-decoration-none" href="#calendario">Sanatorio González Lelong</a></li>
                                <li className="mb-3"><a className="fw-medium text-decoration-none" href="#calendario">Hospital Distrital N°8</a></li>
                                <li className="mb-3"><a className="fw-medium text-decoration-none" href="#calendario">Hospital La Madre y el Niño</a></li>
                                <li className="mb-3"><a className="fw-medium text-decoration-none" href="#calendario">Hospital Central</a></li>
                                <li className="mb-3"><a className="fw-medium text-decoration-none" href="#calendario">Sanatorio Formosa</a></li>
                                <li className="mb-3"><a className="fw-medium text-decoration-none" href="#calendario">Clinica Dr. Jorge Versalovich</a></li>
                                <li className="mb-3"><a className="fw-medium text-decoration-none" href="#calendario">Centro de Salud Republica Argentina</a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="tab-pane fade" id="kinesiologia">
                          <div className="row text-center text-sm-start">
                            <div className="col-sm-6 mb-3 mb-sm-0">
                              <h3 className="h5 mb-4">Hospitales Disponibles</h3>
                              <ul className="list-unstyled">
                                <li className="mb-3"><a className="fw-medium text-decoration-none" href="#calendario">Sanatorio González Lelong</a></li>
                                <li className="mb-3"><a className="fw-medium text-decoration-none" href="#calendario">Hospital Distrital N°8</a></li>
                                <li className="mb-3"><a className="fw-medium text-decoration-none" href="#calendario">Hospital La Madre y el Niño</a></li>
                                <li className="mb-3"><a className="fw-medium text-decoration-none" href="#calendario">Hospital Central</a></li>
                                <li className="mb-3"><a className="fw-medium text-decoration-none" href="#calendario">Sanatorio Formosa</a></li>
                                <li className="mb-3"><a className="fw-medium text-decoration-none" href="#calendario">Clinica Dr. Jorge Versalovich</a></li>
                                <li className="mb-3"><a className="fw-medium text-decoration-none" href="#calendario">Centro de Salud Republica Argentina</a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="tab-pane fade" id="odontologia">
                          <div className="row text-center text-sm-start">
                            <div className="col-sm-6 mb-3 mb-sm-0">
                              <h3 className="h5 mb-4">Hospitales Disponibles</h3>
                              <ul className="list-unstyled">
                                <li className="mb-3"><a className="fw-medium text-decoration-none" href="#calendario">Sanatorio González Lelong</a></li>
                                <li className="mb-3"><a className="fw-medium text-decoration-none" href="#calendario">Hospital Distrital N°8</a></li>
                                <li className="mb-3"><a className="fw-medium text-decoration-none" href="#calendario">Hospital La Madre y el Niño</a></li>
                                <li className="mb-3"><a className="fw-medium text-decoration-none" href="#calendario">Hospital Central</a></li>
                                <li className="mb-3"><a className="fw-medium text-decoration-none" href="#calendario">Sanatorio Formosa</a></li>
                                <li className="mb-3"><a className="fw-medium text-decoration-none" href="#calendario">Clinica Dr. Jorge Versalovich</a></li>
                                <li className="mb-3"><a className="fw-medium text-decoration-none" href="#calendario">Centro de Salud Republica Argentina</a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="tab-pane fade" id="oftalmologia">
                          <div className="row text-center text-sm-start">
                            <div className="col-sm-6 mb-3 mb-sm-0">
                              <h3 className="h5 mb-4">Hospitales Disponibles</h3>
                              <ul className="list-unstyled">
                                <li className="mb-3"><a className="fw-medium text-decoration-none" href="#calendario">Sanatorio González Lelong</a></li>
                                <li className="mb-3"><a className="fw-medium text-decoration-none" href="#calendario">Hospital Distrital N°8</a></li>
                                <li className="mb-3"><a className="fw-medium text-decoration-none" href="#calendario">Hospital La Madre y el Niño</a></li>
                                <li className="mb-3"><a className="fw-medium text-decoration-none" href="#calendario">Hospital Central</a></li>
                                <li className="mb-3"><a className="fw-medium text-decoration-none" href="#calendario">Sanatorio Formosa</a></li>
                                <li className="mb-3"><a className="fw-medium text-decoration-none" href="#calendario">Clinica Dr. Jorge Versalovich</a></li>
                                <li className="mb-3"><a className="fw-medium text-decoration-none" href="#calendario">Centro de Salud Republica Argentina</a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="fade active show" id="calendario">
                    <section className="ftco-section">
                      <div className="container">
                        <div className="row">
                          <h3 className="h3 mb-4 text-center">Escoja día y horario.</h3>
                          <div className="col-md-6 date-picker">
                            <input type="date" className="form-control" />
                          </div>
                          <div className="col-md-6">
                            <input type="time" className="form-control" />
                          </div>
                        </div>
                      </div>
                    </section>
                    <div className="text-center col-lg-12">
                      <a className="btn btn-primary btn-lg mr-lg-3 my-1 col-lg-6" href="../pagina_principal/index.php" role="button">Enviar</a>
                    </div>
                  </div>
                </div>
              </section>
            </section>
          </main>
          <footer className="footer bg-dark pt-5 pt-md-6 pt-lg-7">
            <div className="container pt-3 pt-md-0">
              <hr className="hr-light my-5" />
              <div className="row justify-content-center">
                <div className="col-lg-6 col-md-7 pb-md-4 text-center">
                  <h4 className="text-light mb-grid-gutter">Subscribe to Newsletter</h4>
                  <form className="subscription-form validate" action="https://studio.us12.list-manage.com/subscribe/post?u=c7103e2c981361a6639545bd5&amp;id=29ca296126" method="post" name="mc-embedded-subscribe-form" target="_blank" noValidate>
                    <div className="input-group flex-nowrap"><i className="ai-mail position-absolute top-50 start-0 translate-middle-y text-muted ms-3" />
                      <input className="form-control rounded-start" type="email" name="EMAIL" placeholder="Your email" />
                      <button className="btn btn-primary" type="submit" name="subscribe">Subscribe*</button>
                    </div>
                    {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
                    <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true">
                      <input className="subscription-form-antispam" type="text" name="b_c7103e2c981361a6639545bd5_29ca296126" tabIndex={-1} />
                    </div>
                    <div className="form-text text-light opacity-50">*Subscribe to our newsletter to receive early discount offers and new templates info.</div>
                    <div className="subscription-status" />
                  </form>
                </div>
              </div>
              <hr className="hr-light my-5" />
              <p className="fs-sm text-center mb-0 pb-5"><span className="text-light opacity-50 me-1">© All rights reserved. Made by</span><a className="nav-link-style nav-link-light" href="https://createx.studio/" target="_blank" rel="noopener">Createx Studio</a></p>
            </div>
          </footer>
          {/* Back to top button*/}
          <a className="btn-scroll-top show" href="#top" data-scroll data-fixed-element>
            <span className="btn-scroll-top-tooltip text-muted fs-sm me-2">Top</span><img src="/proy_int/img/icon/up-arrow.png" alt="" />
          </a>
          {/* Vendor scrits: js libraries and plugins*/}
          {/* Main theme script*/}
        </div>
    );
}

export default Turnos
