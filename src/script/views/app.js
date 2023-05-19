import '../component/nav-bar.js';
import '../component/header.js';
import '../component/about.js';
import '../component/footer.js';
import UrlParser from '../routes/url-parser.js';
import routes from '../routes/routes.js';

class App {
    constructor({
        home,
        resume,
        project,
        contact,
    }) {
        this._home = home;
        this._tes = resume;
        this._tes = project;
        this._tes = contact;
    }

    async renderPage() {
        const url = UrlParser.parseActiveUrlWithCombiner();
        const page = routes[url];
        this._home.innerHTML = await page.render();
        await page.afterRender();
    }
}

export default App;