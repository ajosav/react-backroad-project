import { socialLinks } from "../data";
import PageLinks from "./PageLinks";
import SocialLink from "./SocialLink";

const Footer = () => {
  return (
    <footer className="section footer">
      <PageLinks itemClass="footer-link" parentClass="footer-links" />
      <ul className="footer-icons">
        {socialLinks.map((socialLink) => (
          <SocialLink
            {...socialLink}
            itemClass="footer-icon"
            key={socialLink.id}
          />
        ))}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
