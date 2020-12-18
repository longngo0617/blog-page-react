import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Culture from "./pages/culture/Culture";
import Home from "./pages/home/Home";
import LifeStyle from "./pages/lifestyle/LifeStyle";
import Startup from "./pages/startup/Startup";
import Blog from "./pages/blog/Blog";
import BlogSingle from "./pages/blogsingle/BlogSingle";
import Page404 from "./pages/page404/Page404";
import Author from "./pages/author/Author";
import Single from "./pages/single/Single";
import SearchResults from "./pages/search-results/SearchResults";
import Contact from "./pages/contact/Contact";
function App() {
  const routes = [
    { path: "/", name: "Home", Component: Home },
    { path: "/life-style", name: "Life Style", Component: LifeStyle },
    { path: "/culture", name: "Culture", Component: Culture },
    { path: "/start-up", name: "Start Up", Component: Startup },
    { path: "/blog", name: "Blog", Component: Blog },
    { path: "/blog-single", name: "Blog Single", Component: BlogSingle },
    { path: "/author", name: "Author", Component: Author },
    { path: "/single", name: "Single", Component: Single },
    { path: "/search-results", name: "Search Result", Component: SearchResults },
    { path: "/contact", name: "Contact", Component: Contact },
    { path: "/*", name: "Page 404", Component: Page404 },
  ];
  return (
    <>
      <Router>
        <Header />
        <Switch>
          {routes.map(({ path, Component }) => (
            <Route key={path} exact path={path}>
              <Component />
            </Route>
          ))}
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
