const Resume = {
  async render() {
    return `
    <style>
    @media (min-width: 257px) {
        .dwnld{
            font-size: 12px;
        }
      }
    </style>
            <nav-bar></nav-bar>
                  <!-- Page Content-->
                  <div class="container px-5 my-5">
                      <div class="text-center mb-5">
                          <h1 class="display-5 fw-bolder mb-0"><span class="text-gradient d-inline">Resume</span></h1>
                      </div>
                      <div class="row gx-5 justify-content-center">
                          <div class="col-lg-11 col-xl-9 col-xxl-8">
                              <!-- Experience Section-->
                              <section>
                                  <div class="d-flex align-items-center justify-content-between mb-4">
                                      <h2 class="text-primary fw-bolder mb-0">Experience</h2>
                                      <!-- Download resume button-->
                                      <!-- Note: Set the link href target to a PDF file within your project-->
                                      <a class="dwnld btn btn-primary px-4 py-3" href="https://drive.google.com/file/d/1ckWZT1e63yUrQyxdMFxgFA6kZ0a8zIFy/view?usp=share_link">
                                          <div class="d-inline-block bi bi-download me-2"></div>
                                          Download Resume
                                      </a>
                                  </div>
                                  <div class="card shadow border-0 rounded-4 mb-5">
                                  <div class="card-body p-5">
                                      <div class="row align-items-center gx-5">
                                          <div class="col text-center text-lg-start mb-4 mb-lg-0">
                                              <div class="bg-light p-4 rounded-4">
                                                  <div class="text-primary fw-bolder mb-2">Feb 2023 - Now</div>
                                                  <div class="small fw-bolder">Cloud Computing</div>
                                                  <div class="small text-muted">Bangkit Academy Indonesia</div>
                                              </div>
                                          </div>
                                          <div class="col-lg-8"><div>I participated in one of the independent campus programs, namely independent study at Bangkit academy Indonesia with learning path cloud computing.</div></div>
                                      </div>
                                  </div>
                                </div>
                                  <!-- Experience Card 1-->
                                  <div class="card shadow border-0 rounded-4 mb-5">
                                      <div class="card-body p-5">
                                          <div class="row align-items-center gx-5">
                                              <div class="col text-center text-lg-start mb-4 mb-lg-0">
                                                  <div class="bg-light p-4 rounded-4">
                                                      <div class="text-primary fw-bolder mb-2">Aug 2022 - Dec 2022</div>
                                                      <div class="small fw-bolder">SIB Front End Back End</div>
                                                      <div class="small text-muted">Dicoding Akademi Indonesia</div>
                                                      <div class="small text-muted">Bandung</div>
                                                  </div>
                                              </div>
                                              <div class="col-lg-8"><div>I participated in one of the independent campus programs, namely independent study at Dicoding academy Indonesia with the Front End and Back End learning path.</div></div>
                                          </div>
                                      </div>
                                  </div>
                                  <!-- Experience Card 2-->
                                  <div class="card shadow border-0 rounded-4 mb-5">
                                      <div class="card-body p-5">
                                          <div class="row align-items-center gx-5">
                                              <div class="col text-center text-lg-start mb-4 mb-lg-0">
                                                  <div class="bg-light p-4 rounded-4">
                                                      <div class="text-primary fw-bolder mb-2">Aug 2021 - Oct 2021</div>
                                                      <div class="small fw-bolder">Corporate Intern</div>
                                                      <div class="small text-muted">Pos indonesia</div>
                                                      <div class="small text-muted">Tegal</div>
                                                  </div>
                                              </div>
                                              <div class="col-lg-8"><div>Responsible for the entry of corporate mail and is included in the Sales division.</div></div>
                                          </div>
                                      </div>
                                  </div>
                              </section>
                              
                              <!-- Education Section-->
                              <section>
                                  <h2 class="text-secondary fw-bolder mb-4">Education</h2>
                                  <!-- Education Card 1-->
                                  <div class="card shadow border-0 rounded-4 mb-5">
                                      <div class="card-body p-5">
                                          <div class="row align-items-center gx-5">
                                              <div class="col text-center text-lg-start mb-4 mb-lg-0">
                                                  <div class="bg-light p-4 rounded-4">
                                                      <div class="text-secondary fw-bolder mb-2">2020 - now</div>
                                                      <div class="mb-2">
                                                          <div class="small fw-bolder">Islamic University Sultan Agung Semarang</div>
                                                          <div class="small text-muted">Semarang</div>
                                                      </div>
                                                      <div class="fst-italic">
                                                          <div class="small text-muted">Bachelor</div>
                                                          <div class="small text-muted">Informatic Engineer</div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <!-- Education Card 2-->
                                  <div class="card shadow border-0 rounded-4 mb-5">
                                      <div class="card-body p-5">
                                          <div class="row align-items-center gx-5">
                                              <div class="col text-center text-lg-start mb-4 mb-lg-0">
                                                  <div class="bg-light p-4 rounded-4">
                                                      <div class="text-secondary fw-bolder mb-2">2017 - 2020</div>
                                                      <div class="mb-2">
                                                          <div class="small fw-bolder">Senior High School 3</div>
                                                          <div class="small text-muted">Tegal</div>
                                                      </div>
                                                      <div class="fst-italic">
                                                          <div class="small text-muted">Undergraduate</div>
                                                          <div class="small text-muted">Science</div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </section>

                              <!-- Divider-->
                              <div class="pb-5"></div>
                              <!-- Skills Section-->
                              <section>
                                  <!-- Skillset Card-->
                                  <div class="card shadow border-0 rounded-4 mb-5">
                                      <div class="card-body p-5">
                                          <!-- Professional skills list-->
                                          <div class="mb-5">
                                              <div class="d-flex align-items-center mb-4">
                                                  <div class="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3"><i class="bi bi-tools"></i></div>
                                                  <h3 class="fw-bolder mb-0"><span class="text-gradient d-inline">Professional Skills</span></h3>
                                              </div>
                                              <div class="row row-cols-1 row-cols-md-3 mb-4">
                                                  <div class="col mb-4 mb-md-0"><div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">Web Development</div></div>
                                                  <div class="col mb-4 mb-md-0"><div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">Cloud Engineer</div></div>
                                                  <div class="col"><div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">Adobe Software Suite</div></div>
                                              </div>
                                              <div class="row row-cols-1 row-cols-md-3">
                                                  <div class="col mb-4 mb-md-0"><div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">User Interface Design</div></div>
                                                  <div class="col mb-4 mb-md-0"><div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">Video Editor</div></div>
                                                  <div class="col"><div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">Microsoft Software Suite</div></div>
                                              </div>
                                          </div>
                                          <!-- Languages list-->
                                          <div class="mb-0">
                                              <div class="d-flex align-items-center mb-4">
                                                  <div class="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3"><i class="bi bi-code-slash"></i></div>
                                                  <h3 class="fw-bolder mb-0"><span class="text-gradient d-inline">Languages</span></h3>
                                              </div>
                                              <div class="row row-cols-1 row-cols-md-3 mb-4">
                                                  <div class="col mb-4 mb-md-0"><div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">HTML</div></div>
                                                  <div class="col mb-4 mb-md-0"><div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">CSS</div></div>
                                                  <div class="col"><div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">JavaScript</div></div>
                                              </div>
                                              <div class="row row-cols-1 row-cols-md-3">
                                                  <div class="col mb-4 mb-md-0"><div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">Python</div></div>
                                                  <div class="col mb-4 mb-md-0"><div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">Java</div></div>
                                                  <div class="col"><div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">Node.js</div></div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </section>
                          </div>
                      </div>
                  </div>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default Resume;
