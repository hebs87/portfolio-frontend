import HeaderLink from "./HeaderLink/HeaderLink";
import {NAV_LINKS} from '../../utils/variables';
import {scrollIntoView} from '../../utils/helpers';
import {useScrollHandler} from '../../hooks/ScrollHook';

const Header = ({name}) => {
  const scroll = useScrollHandler(75);

  const handleNavLinkClick = (id) => {
    scrollIntoView(id);
    collapseMobileNav();
  };

  const collapseMobileNav = () => {
    // Close mobile side nav menu if open
    const openedMobileMenu = document.querySelector('.navbar-collapse.show');
    if (openedMobileMenu) {
      const navToggler = document.querySelector('.navbar-toggler');
      navToggler.click();
    }
  };

  return (
    <>
      <header>
        <div className="profile-page sidebar-collapse">
          <nav
            className={`navbar navbar-expand-lg fixed-top bg-primary ${scroll && 'navbar-transparent'}`}
          >
            <div className="container">
              <div className="navbar-translate">
                <a
                  className="navbar-brand"
                  href={() => false}
                  onClick={() => scrollIntoView('top')}
                  rel="tooltip"
                >
                  {name} | CV &amp; Portfolio
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navigation"
                  aria-controls="navigation"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-bar bar1"/>
                  <span className="navbar-toggler-bar bar2"/>
                  <span className="navbar-toggler-bar bar3"/>
                </button>
              </div>
              <div
                id="navigation"
                className="collapse navbar-collapse justify-content-end"
              >
                <ul className="navbar-nav">
                  {
                    NAV_LINKS && NAV_LINKS.map(({id, text}) => (
                      <li key={id} className="nav-item">
                        <HeaderLink
                          text={text}
                          onClick={() => handleNavLinkClick(id)}
                        />
                      </li>
                    ))
                  }
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
