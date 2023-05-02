class Header extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
      <header
        class="site-header bg-white  site-header--menu-left dynamic-sticky-bg  site-header--absolute site-header--sticky">
        <div class="container">
          <nav class="navbar site-navbar">
            <!-- Brand Logo-->
            <div class="brand-logo">
              <a href="Index.html">
                <!-- light version logo (logo must be black)-->
                <img src="image/tdc_circle_logo.png" alt="" class="light-version-logo tdc-logo">
                <!-- Dark version logo (logo must be White)-->
                <img src="image/tdc_circle_logo.png" alt="" class="dark-version-logo tdc-logo">
              </a>
            </div>
            <div class="menu-block-wrapper  ms-lg-7">
              <div class="menu-overlay"></div>
              <nav class="menu-block" id="append-menu-header">
                <div class="mobile-menu-head">
                  <div class="go-back">
                    <i class="fa fa-angle-left"></i>
                  </div>
                  <div class="current-menu-title"></div>
                  <div class="mobile-menu-close">&times;</div>
                </div>
                <ul class="site-menu-main">
                  <li class="nav-item nav-item-has-children">
                    <a href="Index.html" class="nav-link-item drop-trigger active-link hover-link">Home
                    </a>
                  </li>
  
                  <li class="nav-item nav-item-has-children">
                    <a href="#" class="nav-link-item drop-trigger hover-link">About TDC<i class="fas fa-angle-down"></i>
                    </a>
                    <ul class="sub-menu" id="submenu-3">
                      <li class="sub-menu--item">
                        <a href="about.html">About Us</a>
                      </li>
                      <li class="sub-menu--item">
                        <a href="career-with-tdc.html">Careers</a>
                      </li>
                      <li class="sub-menu--item">
                        <a href="faqs.html">FAQ</a>
                      </li>
                      <li class="sub-menu--item">
                        <a href="terms-and-conditions.html">Terms & Conditions</a>
                      </li>
                    </ul>
                  </li>
  
                  <li class="nav-item nav-item-has-children">
                    <a href="#" class="nav-link-item drop-trigger hover-link">Developers
                    </a>
                  </li>
  
                  <li class="nav-item nav-item-has-children ">
                    <a href="#" class="nav-link-item drop-trigger hover-link">Services<i class="fas fa-angle-down"></i>
                    </a>
                    <ul class="sub-menu" id="submenu-1">
                      <li class="sub-menu--item">
                        <a href="project-management.html">Project Management</a>
                      </li>
                      <li class="sub-menu--item">
                        <a href="web-app-development.html">Web App Development</a>
                      </li>
                      <li class="sub-menu--item">
                        <a href="mobile-app-development.html">Mobile App Development</a>
                      </li>
                      <li class="sub-menu--item">
                        <a href="digital-marketing.html">Digital Marketing</a>
                      </li>
                      <!-- <li class="sub-menu--item">
                        <a href="it-services.html">IT Services</a>
                      </li> -->
                      <!-- <li class="sub-menu--item">
                        <a href="ServicesScreen.html">Services</a>
                      </li> -->
                    </ul>
                  </li>
  
                  <li class="nav-item nav-item-has-children">
                    <a href="tecnologies.html" class="nav-link-item drop-trigger hover-link">Technologies
                    </a>
                  </li>
  
                  <li class="nav-item nav-item-has-children">
                    <a href="#" class="nav-link-item drop-trigger hover-link">Portfolio<i class="fas fa-angle-down"></i>
                    </a>
                    <ul class="sub-menu" id="submenu-2">
                      <li class="sub-menu--item">
                        <a href="portfolio.html">Jobs Done</a>
                      </li>
                      <li class="sub-menu--item">
                        <a href="testimonial.html">Happy Clients</a>
                      </li>
                    </ul>
                  </li>
  
                  <li class="nav-item nav-item-has-children">
                    <a href="blogs.html" class="nav-link-item hover-link">Blog</i>
                    </a>
                  </li>
  
                  <li class="nav-item nav-item-has-children">
                    <a href="contact.html" class="nav-link-item hover-link">Contact Us</i>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div class="header-btns  ms-auto ms-lg-0 d-none d-sm-flex align-items-center">
              <button type="button" class=" bg-blue-ribbon text-white btn btn--lg m-sm-auto" data-bs-toggle="modal"
                data-bs-target="#exampleModal">
                Hire Now
              </button>
            </div>
            <!-- mobile menu trigger -->
            <div class="mobile-menu-trigger">
              <span></span>
            </div>
            <!--/.Mobile Menu Hamburger Ends-->
          </nav>
        </div>
      </header>

      <!-- Modal -->
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-scrollable position-relative">
          <form class="modal-content custom-border-none">
            <img src="image/modal_left_ellipse.png" alt="" class="modal-left-img">
            <div class="modal-body home-modal">
              <div class="d-flex justify-content-end">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <h5 class="modal-title" id="exampleModalLabel">Hire Now!</h5>
              <div class="modal-field-container gap-sm-4">
                <div class="user-input-container">
                  <img src="image/user_icon.svg" />
                  <input type="text" class="user-inputs" placeholder="Name" required />
                </div>
                <div class="user-input-container">
                  <img src="image/company_icon.svg" />
                  <input type="text" class="user-inputs" placeholder="Company Name" required />
                </div>
              </div>
  
              <div class="modal-field-container gap-sm-4">
                <div class="user-input-container">
                  <img src="image/email_icon.svg" />
                  <input type="email" class="user-inputs" placeholder="Email Address" required />
                </div>
                <select class="user-custom-select form-select form-select-sm" required>
                  <option disabled selected value="">Experience</option>
                  <option value="1">1-3 years</option>
                  <option value="2">3-5 years</option>
                  <option value="3">5++ years</option>
                </select>
              </div>
  
              <select class="user-custom-select-two form-select form-select-sm" required>
                <option disabled selected value="">Hiring Position</option>
                <option value="1">Front-end</option>
                <option value="2">Back-end</option>
                <option value="3">QA's</option>
                <option value="3">DevOps</option>
                <option value="3">Full-Stack</option>
                <option value="3">Tech-Stack</option>
              </select>
              <button type="submit" class="modal-button">Submit</button>
          </form>
          <img src="image/modal_right_ellipse.png" alt="" class="modal-right-img">
        </div>
      </div>
      </div>
      <!-- Modal -->
    `;
  }
}

customElements.define("header-component", Header);
