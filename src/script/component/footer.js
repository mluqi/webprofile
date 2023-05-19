class FooterSec extends HTMLElement {
    connectedCallback() {
      this.render();
    }
  
    render() {
      this.innerHTML = `
    <footer class="bg-white py-4 mt-auto">
      <div class="container px-5">
          <div class="row align-items-center justify-content-between flex-column flex-sm-row">
              <div class="col-auto"><div class="small m-0">Copyright &copy; MatchaLatte 2023</div></div>
          </div>
      </div>
    </footer>`;
    }
  }
  
  customElements.define("footer-sec", FooterSec);