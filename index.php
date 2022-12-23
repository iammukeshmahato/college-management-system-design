<!DOCTYPE html>
<html>

<?php include('./header.php') ?>

<body>
<!-- NavBar -->
<?php include('./nav.php') ?>

  <!-- slider -->
  <section>
    <div id="galleryCarousel" class="carousel slide mx-4" style="height: 500px" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#galleryCarousel" data-bs-slide-to="0" class="active" aria-current="true"
          aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#galleryCarousel" data-bs-slide-to="1" aria-current="true"
          aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#galleryCarousel" data-bs-slide-to="2" aria-current="true"
          aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#galleryCarousel" data-bs-slide-to="3" aria-current="true"
          aria-label="Slide 4"></button>
        <button type="button" data-bs-target="#galleryCarousel" data-bs-slide-to="4" aria-current="true"
          aria-label="Slide 5"></button>
      </div>
      <div class="carousel-inner">

        <div class="carousel-item active ">
          <img src="./images/sliders/admin.png" class="d-block w-100" height="500px" alt="..." />
        </div>

        <div class="carousel-item">
          <img src="./images/sliders/IMG_1294.jpg" class="d-block w-100" height="500px" alt="..." />
        </div>

        <div class="carousel-item">
          <img src="./images/sliders/2021-06-25.jpg" class="d-block w-100" height="500px" alt="..." />
        </div>

        <div class="carousel-item">
          <img src="./images/sliders/01slider_03_03.jpg" class="d-block w-100" height="500px" alt="..." />
        </div>

        <div class="carousel-item">
          <img src="./images/sliders/download.jpg" class="d-block w-100" height="500px" alt="..." />
        </div>

        <div class="position-absolute top-50 start-50 translate-middle">
          <button type="button" class="btn btn-warning">
            Latest News<i class="bi bi-arrow-right-circle-fill ps-1"></i>
          </button>
        </div>

        <div class="row">
          <div class="carousel-caption d-md-block col-md-8 col-9">
            <marquee behavior="scroll" direction="left" scrollamount="10" class="m-5">
              <a href="#" style="text-decoration: none">
                <p class="text-center" style="
                    color: rgba(149, 10, 0, 0.901);
                    font-size: 30px;
                    font-weight: 500;
                    background-color: rgb(121, 121, 121);
                    opacity: 0.8;
                  ">
                  Click here to apply for admission.
                </p>
              </a>
            </marquee>
          </div>
        </div>

        <button class="carousel-control-prev" type="button" data-bs-target="#galleryCarousel" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>

        <button class="carousel-control-next" type="button" data-bs-target="#galleryCarousel" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
  </section>

  <!-- Programs -->
  <section>
    <div class="container-fluid mt-5">
      <h2 style="text-align: center">Programs</h2>
      <div class="container mt-5">
        <div class="container">
          <div class="row gx-4 mt-3">
            <div class="col-md mb-4">
              <div class="card text-center">
                <div class="card-header">DIPLOMA IN INFORMATION TECHNOLOGY</div>
                <div class="card-body">
                  <img src="./images/programmes/it.jpg" class="rounded" alt="..." />
                  <p class="card-text">
                    We provide educational foundation for the careers in
                    Information Technology with skill and knowledge for IT
                    professional.
                  </p>
                  <a href="./programs-more-info/dit.html" class="btn btn-primary">Show More</a>
                </div>
              </div>
            </div>
            <div class="col-md mb-4">
              <div class="card text-center">
                <div class="card-header">DIPLOMA IN CIVIL ENGINEERING</div>
                <div class="card-body">
                  <img src="./images/programmes/civil.jpg" class="rounded" alt="..." />
                  <p class="card-text">
                    We provide educational foundation for the careers in Civil
                    Engineering with project and field works which will update
                    your practical education.
                  </p>
                  <a href="./programs-more-info/dce.html" class="btn btn-primary">Show More</a>
                </div>
              </div>
            </div>
            <div class="col-md mb-4">
              <div class="card text-center">
                <div class="card-header">DIPLOMA IN GEOMETICS ENGINEERING</div>
                <div class="card-body">
                  <img src="./images/programmes/geomatics_engineer_profile_image.jpg" class="rounded" alt="..." />
                  <p class="card-text">
                    Produce middlelevel competent technical workforce/human
                    resources who could provide land survey works.
                  </p>
                  <a href="./programs-more-info/dge.html" class="btn btn-primary">Show More</a>
                </div>
              </div>
            </div>
          </div>

          <div class="row gx-4 mt-4">
            <div class="col-md mb-4">
              <div class="card text-center">
                <div class="card-header">DIPLOMA IN ELECTRICAL ENGINEERING</div>
                <div class="card-body">
                  <img src="./images/programmes/electrical.jpg" class="rounded" alt="..." />
                  <p class="card-text">
                    We provide middle level competent electrical human resource in Electrical Engineering.
                  </p>
                  <a href="./programs-more-info/dee.html" class="btn btn-primary">Show More</a>
                </div>
              </div>
            </div>
            <div class="col-md mb-4">
              <div class="card text-center">
                <div class="card-header">DIPLOMA IN HOTELMANAGEMENT</div>
                <div class="card-body">
                  <img src="./images/programmes/hotel-management-college-in-up.jpg" class="rounded" alt="..." />
                  <p class="card-text">
                    We provide professional knowledge and skills in the respected fields of hotel and catering industry.
                  </p>
                  <a href="./programs-more-info/dhm.html" class="btn btn-primary">Show More</a>
                </div>
              </div>
            </div>
            <div class="col-md mb-4">
              <div class="card text-center">
                <div class="card-header">OTHERS PROGRAMS</div>
                <div class="card-body">
                  <img src="./images/programmes/other.png" class="rounded" alt="..." />
                  <p class="card-text">
                    NBPI also offers various short term training programs
                  </p>
                  <a href="#" class="btn btn-primary">Show More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- maps -->
  <section class="mx-4">
    <h1 class="my-5 text-center">Maps</h1>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d5108.684899950221!2d85.52195347426853!3d27.632284489743576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x39eb08cbf3d0bf37%3A0xf70afedce7d316f3!2sBanepa%20Polytechnic%20Institute%2C%20Banepa%2C%20Nepal!3m2!1d27.6362167!2d85.5240475!4m5!1s0x39eb0952c859d8b7%3A0x8e14756791890b20!2sBanepa%2C%20chardobato%2C%20Araniko%20Highway%2C%20Banepa!3m2!1d27.6296051!2d85.52567429999999!5e0!3m2!1sen!2snp!4v1671069674415!5m2!1sen!2snp"
      width="100%" height="500px" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  </section>

<?php include("./footer.php") ?>

</body>

</html>