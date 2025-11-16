import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import SuccessStories from "./pages/SuccessStories";
import Ecommerce from "./pages/Ecommerce";
import GraphicDesign from "./pages/GraphicDesign";
import Photography from "./pages/Photography";
import SocialMedia from "./pages/SocialMedia";
import Websites from "./pages/Websites";
import Contact from "./pages/Contact";
// put your logo file in src/assets/peppr-logo.png (or .svg)
import pepprLogo from "./assets/LOGO.png"; 
// or: "./assets/peppr-logo.svg"


function App() {
  return (
    <div className="app app-dark">
      <header className="top-nav-wrapper">
  <div className="top-nav">
    {/* LEFT: nav links */}
    <nav className="top-nav-left">
      <Link to="/success-stories" className="nav-link">
        Success Stories
      </Link>
      <Link to="/about" className="nav-link">
        About Us
      </Link>
    </nav>

    {/* CENTER: Peppr logo */}
    <div className="top-nav-center">
      <Link to="/" className="logo-link">
        {/* IMAGE LOGO VERSION */}
        <img src={pepprLogo} alt="Peppr" className="logo-img" />

        {/* TEXT-ONLY FALLBACK (use this instead if you don't have a logo file yet)
        <span className="logo-wordmark">PEPPR</span>
        */}
      </Link>
    </div>

    {/* RIGHT: Connect now button */}
    <div className="top-nav-right">
      <button className="btn btn-amazon">
  Call Adam!
</button>

    </div>
  </div>
</header>


      <main className="main-shell">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* keep your other routes here */}
        </Routes>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Your Brand. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
