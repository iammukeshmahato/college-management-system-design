<?php include('../header.php') ?>

<link rel="stylesheet" href="style.css">

<body>
    <!-- nav bar with top contact btns -->
    <?php include('../nav.php') ?>

    <div class="container text-center border-warning" id="downloads" style="margin-top: 150px;">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
                <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">
                    Curriculum
                </button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="profile" aria-selected="false">
                    Fee structure
                </button>
            </li>
            <!-- <li class="nav-item" role="presentation">
                <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button"
                    role="tab" aria-controls="contact" aria-selected="false">
                    Others
                </button>
            </li> -->
        </ul>
        <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                <div class="row mt-3">
                    <div class="col-md-3">
                        <div class="card border-warning mt-2">
                            <div class="card-body">
                                <h5 class="card-title mb-md-3">
                                    Curriculum of Diploma In Information Technology
                                </h5>

                                <button download="" class="btn btn-outline-warning">Download</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="card border-warning mt-2">
                            <div class="card-body">
                                <h5 class="card-title mb-md-3">
                                    Curriculum of Diploma In Civil Engineering
                                </h5>

                                <a href="#" class="btn btn-outline-warning">Download</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="card border-warning mt-2">
                            <div class="card-body">
                                <h5 class="card-title mb-md-3">
                                    Curriculum Diploma In Electrical Engineering
                                </h5>

                                <a href="#" class="btn btn-outline-warning">Download</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="card border-warning mt-2">
                            <div class="card-body">
                                <h5 class="card-title mb-md-3">
                                    Curriculum Diploma In Geometics Engineering
                                </h5>

                                <a href="#" class="btn btn-outline-warning">Download</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="card border-warning mt-2">
                            <div class="card-body">
                                <h5 class="card-title mb-md-3">
                                    Curriculum Diploma In Hotel Management
                                </h5>

                                <a href="#" class="btn btn-outline-warning">Download</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                <div class="row mt-3">
                    <div class="col-md-3">
                        <div class="card border-warning mt-2">
                            <div class="card-body">
                                <h5 class="card-title mb-md-3">
                                    Fee structure of Diploma In Information Technology
                                </h5>

                                <a href="#" class="btn btn-outline-warning">Download</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="card border-warning mt-2">
                            <div class="card-body">
                                <h5 class="card-title mb-md-3">
                                    Fee structure of Diploma In Civil Engineering
                                </h5>

                                <a href="#" class="btn btn-outline-warning">Download</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="card border-warning mt-2">
                            <div class="card-body">
                                <h5 class="card-title mb-md-3">
                                    Fee structure of Diploma In Electrical Engineering
                                </h5>

                                <a href="#" class="btn btn-outline-warning">Download</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="card border-warning mt-2">
                            <div class="card-body">
                                <h5 class="card-title mb-md-3">
                                    Fee structure of Diploma In Geometics Engineering
                                </h5>

                                <a href="#" class="btn btn-outline-warning">Download</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="card border-warning mt-2">
                            <div class="card-body">
                                <h5 class="card-title mb-md-3">
                                    Fee structuref Diploma In Hotel Management
                                </h5>

                                <a href="#" class="btn btn-outline-warning">Download</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab"></div> -->
        </div>
    </div>

    <footer class="bg-dark text-white pt-5 pb-4 mt-5">
        <div class="container text-center text-md-left">
            <div class="row text-center text-md-left">
                <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                    <h5 class="text-uppercase font-weight-bold text-warning">NBPI</h5>
                    <a href="#">
                        <i class="bi bi-envelope text-light"></i> nbpi.edu@gmail.com
                    </a>
                    <a href="#">
                        <i class="bi bi-telephone ps-2 text-light"></i> 011864290
                    </a>
                    <a href="#"><i class="bi bi-geo-alt-fill text-light"></i> Nepal Banepa
                        Polytechnic Institute, Banepa, Kavre</a>
                </div>

                <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                    <h5 class="text-uppercase mb-4 font-weight-bold text-warning">
                        Pages
                    </h5>
                    <a href="/nav.html">Home</a>
                    <a href="/about us/about-us.php">About</a>
                    <a href="/contact us/contact.php">Contact</a>
                    <a href="/downloads-button/download.php">Downloads</a>
                </div>

                <!-- <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                <h5 class="text-uppercase mb-4 font-weight-bold text-warning">
                  Services
                </h5>
                <a href="#">Student Life</a>
                <a href="#">Gallery</a>
                <a href="#">Alumini</a>
              </div> -->

                <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                    <h5 class="text-uppercase mb-4 font-weight-bold text-warning">
                        Quick Links
                    </h5>
                    <a href="http://www.ctevt.org.np/">
                        CTEVT (Council for Technical Education and Vocational Training)
                    </a>
                    <a href="http://titi.org.np/">
                        TITI (Training Institute for Technical Instruction)
                    </a>
                    <a href="http://nbpi.edu.np/tslc.php">
                        Tracer Study Questionaire
                    </a>
                </div>

                <hr style="line-height: 5px; color: white; width: 100%" />

                <div class="row align-item-center">
                    <p class="mb-0">
                        Copyright &copy 2022 All Right Reserved By: <strong>NBPI</strong>
                    </p>
                </div>
            </div>
        </div>
    </footer>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
</body>

</html>