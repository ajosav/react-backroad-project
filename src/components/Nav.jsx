import PageLinks from "./PageLinks";
import { socialLinks } from "../data";
import logo from "../assets/images/logo.svg";
import SocialLink from "./SocialLink";

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button
            type="button"
            className="nav-toggle"
            id="nav-toggle"
            onClick={toggleLinks}
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <PageLinks parentClass="nav-links" itemClass="nav-link" />
        <ul className="nav-icons">
          {socialLinks.map((socialLink) => (
            <SocialLink
              {...socialLink}
              itemClass="nav-icon"
              key={socialLink.id}
            />
          ))}
        </ul>
      </div>
    </nav>
  );
};

function toggleLinks() {
  document.getElementById("nav-links").classList.toggle("show-links");
}

export default Nav;
