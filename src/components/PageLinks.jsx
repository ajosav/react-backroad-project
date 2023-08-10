import PageLink from "./PageLink";
import { pageLinks } from "../data";

const PageLinks = ({ parentClass, itemClass }) => {
  return (
    <ul className={parentClass} id="nav-links">
      {pageLinks.map((navLinks, index) => (
        <PageLink {...navLinks} itemClassName={itemClass} key={index} />
      ))}
    </ul>
  );
};

export default PageLinks;
