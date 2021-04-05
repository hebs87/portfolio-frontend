import SectionContainer from '../Container/SectionContainer';
import Project from './Project/Project';
import {scrollIntoView} from '../../utils/helpers';

const Portfolio = ({projects}) => {
  return (
    <SectionContainer id={'portfolio'}>
      <div className="row">
        <div className="col-md-6 ml-auto mr-auto">
          <div className="h4 text-center mb-4 title">Portfolio</div>
          <div className="nav-align-center">
            <ul className="nav nav-pills nav-pills-primary" role="tablist">
              <li className="nav-item">
                <a
                  className="nav-link web-dev active"
                  data-toggle="tab"
                  href="/#"
                  onClick={() => scrollIntoView('web-development')}
                  role="tablist"
                >
                  <i className="fa fa-laptop" aria-hidden="true"/>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="tab-content gallery mt-5">
        <div className="tab-pane active" id="web-development">
          <div className="ml-auto mr-auto">
            <div className="row">
              {
                projects && projects.map(({id, link, image, name, description}) => (
                  <Project
                    key={id}
                    link={link}
                    image={image}
                    name={name}
                    description={description}
                  />
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Portfolio;
