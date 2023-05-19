class AboutSec extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `            
    <section class="bg-light py-5">
      <div class="container px-5">
          <div class="row gx-5 justify-content-center">
              <div class="col-xxl-8">
                  <div class="text-center my-5">
                      <h2 class="display-5 fw-bolder"><span class="text-gradient d-inline">About Me</span></h2>
                      <p class="lead fw-light mb-4">My name is Mohammad Luqi Wiharto</p>
                      <p class="text-muted">i'm a Frontend, Backend Development, and Cloud Computing Engineer</p>
                      <p class="text-muted text-start"><br>
                      I can solve problems well and creatively. In Semarang I am a student of Sultan Agung Islamic University and am still in my 5th semester this year. While studying, I have learned about the importance of applying programming to modern projects.<br>
                    <br>Concentration in Informatics engineering provides extensive knowledge of programming and also participates in several patent procedures that are carried out collaboratively in a team.<br>
                    <br>I am currently following the Independent Study program at Dicoding Indonesia and taking Front-end and Back-end learning packages.<br>
                    <br>Work experience, I once made my own business in the field of wall decoration by making wall posters. I have also worked at PT Pos Indonesia and was responsible for entering corporate letters and entering the Sales division.<br>
                    <br>My organizational experience is being a member of the Unissula Informatics Engineering Student Association, Multimedia Division.<br>
                    <br>I have hard skills in programming such as javascript, python, PHP, HTML, and CSS programming. and MySQL databases. I can also be in the field of design, photo or video editing in Photoshop, figma and Premiere Pro applications. I can also use Microsoft Word, Power Point, and Excel.<br>
                    <br>I also have Soft Skill in public speaking, can manage my emotions, can lead a project, communicate well, think critically, manage my time, do business, work together, work under pressure.<br>
                      </p><br>
                      <div class="d-flex justify-content-center fs-2 gap-4">
                          <a class="text-gradient" href="https://twitter.com/matcha____latte"><i class="bi bi-twitter"></i></a>
                          <a class="text-gradient" href="https://www.linkedin.com/in/mluqi10"><i class="bi bi-linkedin"></i></a>
                          <a class="text-gradient" href="https://github.com/mluqi"><i class="bi bi-github"></i></a>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </section>`;
  }
}

customElements.define("about-sec", AboutSec);
