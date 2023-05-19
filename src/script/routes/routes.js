import Home from '../views/pages/home.js';
import Resume from '../views/pages/resume.js';
import Project from '../views/pages/project.js';
import Contact from '../views/pages/contact.js';
 
const routes = {
  '/': Home, // default page
  '/resume': Resume,
  '/project': Project,
  '/contact': Contact,
};

export default routes;