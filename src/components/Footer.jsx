import React from 'react'
import propTypes from "prop-types"

const Footer = (props) => {
  const {text, text2, text3, text4} = props
  return (
    <footer role="contentinfo" class="py-6 lh-1 bg-white">
      <div class="container">
        <div class="row">
          <div class="col-md-2">
            <h3 class="h4 mb-4">Robust.</h3>
          </div>
          <div class="col-md-10">
            <div class="row">
              <div class="col-md-3 col-sm-6">
                <h4 class="h6">Address</h4>
                <address>
                  <ul class="list-unstyled">
                    <li>
                      City Hall
                      212  Street
                      Lawoma
                      735
                    </li>
                  </ul>
                </address>
              </div>
              <div class="col-md-3 col-sm-6">
                <h4 class="h6">Popular Services</h4>
                <ul class="list-unstyled">
                  <li><a href="#">Payment Center</a></li>
                  <li><a href="#">Contact Directory</a></li>
                  <li><a href="#">Forms</a></li>
                  <li><a href="#">News and Updates</a></li>
                  <li><a href="#">FAQs</a></li>
                </ul>
              </div>
              <div class="col-md-3 col-sm-6">
                <h4 class="h6">Website Information</h4>
                <ul class="list-unstyled">
                  <li><a href="#">Website Tutorial</a></li>
                  <li><a href="#">Accessibility</a></li>
                  <li><a href="#">Disclaimer</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">FAQs</a></li>
                  <li><a href="#">Webmaster</a></li>
                </ul>
              </div>
              <div class="col-md-3 col-sm-6">
                <h4 class="h6">Company</h4>
                <ul class="list-unstyled">
                  <li><a href="#">Our team</a></li>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Contact</a></li>
                  <li><a href="https://themes.getbootstrap.com/product/robust-ui-kit-dashboard-landing/" target="_blank">Purchase</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>)
    }
    Footer.propTypes = {
  text: propTypes.string.isRequired,
  text2: propTypes.string.isRequired,
  text3: propTypes.string.isRequired,
  text4: propTypes.string.isRequired
}

export default Footer