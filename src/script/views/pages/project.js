const Project = {
    async render() {
      return `
                <nav-bar></nav-bar>
                  <!-- Projects Section-->
                  <section class="py-5">
                      <div class="container px-5 mb-5">
                          <div class="text-center mb-5">
                              <h1 class="display-5 fw-bolder mb-0"><span class="text-gradient d-inline">Projects</span></h1>
                          </div>
                          <div class="row gx-5 justify-content-center">
                              <div class="col-lg-11 col-xl-9 col-xxl-8">
                                  <!-- Project Card 1-->
                                  <div class="card overflow-hidden shadow rounded-4 border-0 mb-5">
                                      <div class="card-body p-0">
                                          <div class="d-flex align-items-center">
                                              <div class="p-5">
                                                  <h2 class="fw-bolder">Color Blind Test</h2>
                                                  <p>This website makes it easy for users to do online color blindness testing with a simple and easy-to-understand display. With this website, it is hoped that people who want to do a color blindness test no longer need to buy tools or come to the doctor and can simply access it online anywhere, anytime and using any device. Of course, we hope that this website can facilitate and educate users in the importance of maintaining eye health.
                                                  </p>
                                              </div>
                                              <img class="img-fluid" src="../src/assets/colorblind.png" alt="..." />
                                          </div>
                                      </div>
                                  </div>
                                  <!-- Project Card 2-->
                                  <div class="card overflow-hidden shadow rounded-4 border-0 mb-5">
                                      <div class="card-body p-0">
                                          <div class="d-flex align-items-center">
                                              <div class="p-5">
                                                  <h2 class="fw-bolder">Face Detection</h2>
                                                  <p>This application uses the python programming language and uses the haascade method to recognize and detect faces using a webcam or photo. This application uses opencv library, dlib as a library to detect faces, tkinter as a gui, and PIL to display the image in the application window.</p>
                                              </div>
                                              <img class="img-fluid" src="../src/assets/facedetection.png" alt="..." />
                                          </div>
                                      </div>
                                  </div>
                                  <!-- Project Card 3-->
                                  <div class="card overflow-hidden shadow rounded-4 border-0 mb-5">
                                      <div class="card-body p-0">
                                          <div class="d-flex align-items-center">
                                              <div class="p-5">
                                                  <h2 class="fw-bolder">MakanYuk!</h2>
                                                  <p>a website to search for restaurants and can save a list of restaurants or cafes into a favorite page. this website was built using javascript programming language, node js and uses basic html, css, node package manager. some of these websites are already responsive for mobile devices.</p>
                                              </div>
                                              <img class="img-fluid" src="../src/assets/restaurants-apps.png" alt="..." />
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </section>
                  <!-- Call to action section-->
                  <section class="py-5 bg-gradient-primary-to-secondary text-white">
                      <div class="container px-5 my-5">
                          <div class="text-center">
                              <h2 class="display-4 fw-bolder mb-4">Let's build something together</h2>
                              <a class="btn btn-outline-light btn-lg px-5 py-3 fs-6 fw-bolder" href="#/contact">Contact me</a>
                          </div>
                      </div>
                  </section>
      `;
    },
   
    async afterRender() {
      // Fungsi ini akan dipanggil setelah render()
    },
};

export default Project;