import HeaderLink from "./HeaderLink/HeaderLink";
import {NAV_LINKS} from '../../utils/variables';
import {scrollIntoView} from '../../utils/helpers';

const Header = () => {
  return (
    <>
      <header>
        <div className="profile-page sidebar-collapse">
          <nav className="navbar navbar-expand-lg fixed-top navbar-transparent bg-primary" color-on-scroll="400">
            <div className="container">
              <div className="navbar-translate">
                <a
                  className="navbar-brand"
                  href={() => false}
                  onClick={() => scrollIntoView('top')}
                  rel="tooltip"
                >
                  Sunny Hebbar | CV &amp; Portfolio
                </a>
                <button className="navbar-toggler navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navigation" aria-controls="navigation" aria-expanded="false"
                        aria-label="Toggle navigation">
                  <span className="navbar-toggler-bar bar1"/>
                  <span className="navbar-toggler-bar bar2"/>
                  <span className="navbar-toggler-bar bar3"/>
                </button>
              </div>
              <div className="collapse navbar-collapse justify-content-end" id="navigation">
                <ul className="navbar-nav">
                  {
                    NAV_LINKS && NAV_LINKS.map(({id, text}) => (
                      <li key={id} className="nav-item">
                        <HeaderLink
                          id={id}
                          text={text}
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
