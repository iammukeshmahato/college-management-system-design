  <!-- nav bar with top contact btns -->
  <div class="nav-wrapper position-fixed w-100">
      <div class="top_nav p-3 p-2 d-flex justify-content-between navbar-expand-lg navbar-light" style="background-color: #e3f2fd">
          <div class="left">
              <a class="navbar-brand" href="https://www.facebook.com/nbpicollage" target="_blank">
                  <img src="<?php echo URL ?>images/icons/svg icons/facebook (1).svg" alt="" width="20" height="18" />
              </a>

              <!-- <a class="navbar-brand ms-2" href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=nbpi.edu@gmail.com" target="_blank">
                  <img src="<?php echo URL ?>images/icons/svg icons/gmail.svg" alt="" width="20" height="20" />
              </a> -->

              <a class="navbar-brand ms-2" href="mailto:nbpi.edu@gmail.com" target="_blank">
                  <img src="<?php echo URL ?>images/icons/svg icons/gmail.svg" alt="" width="20" height="20" />
              </a>

              <a class="navbar-brand ms-2" href="https://www.google.com/maps/place/JGPF%2BHFX+Banepa+Polytechnic+Institute,+Banepa+45210/" target="_blank">
                  <img src="<?php echo URL ?>images/icons/svg icons/location.svg" alt="" width="20" height="20" />
              </a>
          </div>

          <div class="right">
              <img src="<?php echo URL ?>images/icons/svg icons/phone.svg" alt="" width="20" height="20" />
              <a class="navbar-brand" href="tel:011-660867">011-660867,</a>
              <a class="navbar-brand" href="tel:011-664290">664290,</a>
              <a class="navbar-brand" href="tel:011-660625">660625</a>
          </div>
      </div>

      <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #e3f2fd">
          <div class="container-fluid">
              <a class="navbar-brand" href="<?php echo URL ?>"><img src="<?php echo URL ?>images/icons/logo.png" style="height: 40px" /></a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                      <li class="nav-item dropdown">
                          <a class="nav-link dropdown-toggle" href="" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                              Programs
                          </a>
                          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                              <li>
                                  <a class="dropdown-item" href="<?php echo URL ?>programs-more-info/dit.html">Diploma In Information Technology</a>
                              </li>
                              <li>
                                  <a class="dropdown-item" href="<?php echo URL ?>programs-more-info/dee.html">Diploma In Electrical Engineering</a>
                              </li>
                              <li>
                                  <a class="dropdown-item" href="<?php echo URL ?>programs-more-info/dce.html">Diploma In Civil Engineering</a>
                              </li>
                              <li>
                                  <a class="dropdown-item" href="<?php echo URL ?>programs-more-info/dge.html">Diploma In Geomatics Engineering</a>
                              </li>
                              <li>
                                  <a class="dropdown-item" href="<?php echo URL ?>programs-more-info/dhm.html">Diploma In Hotel Management</a>
                              </li>
                          </ul>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link" href="<?php echo URL ?>gallery/gallery.php">Gallery</a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link" href="<?php echo URL ?>downloads-button/download.php">Downloads</a>
                      </li>

                      <li class="nav-item">
                          <a class="nav-link" href="#">News</a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link" href="<?php echo URL ?>contact us/contact.php">Contact</a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link" href="<?php echo URL ?>about us/about-us.php">About Us</a>
                      </li>
                  </ul>

                  <a href="#" class="btn btn-outline-primary" id="button">Apply</a>
                  <a href="/login/login.html" class="btn btn-outline-primary">Login</a>

              </div>
          </div>
      </nav>
  </div>