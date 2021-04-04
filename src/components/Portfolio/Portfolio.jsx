import SectionContainer from '../Container/SectionContainer';
import Project from './Project/Project';
import {scrollIntoView} from '../../utils/helpers';

import ProjectOne from '../../assets/images/project-one.jpg';
import ProjectTwo from '../../assets/images/project-two.jpg';
import ProjectThree from '../../assets/images/project-three.jpg';
import ProjectFour from '../../assets/images/project-four.jpg';

const Portfolio = () => {
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
              <Project
                link={"https://hebs87.github.io/monkees-milestone-project-one/"}
                image={ProjectOne}
                name={"Monkees Website"}
                description={`
                  <p>
                    User Centric Frontend Development
                    <br/>
                    Milestone Project One
                  </p>
                `}
              />
              <Project
                link={"https://hebs87.github.io/simon-milestone-project-two/"}
                image={ProjectTwo}
                name={"Simon Game"}
                description={`
                  <p>
                    Interactive Frontend Development
                    <br/>
                    Milestone Project Two
                  </p>
                `}
              />
              <Project
                link={"https://online-cookbook-ms3-hebs87.herokuapp.com/"}
                image={ProjectThree}
                name={"Online Cookbook"}
                description={`
                  <p>
                    Data Centric Development
                    <br/>
                    Milestone Project Three
                  </p>
                `}
              />
              <Project
                link={"https://unicorn-attractor-ms4-hebs87.herokuapp.com/"}
                image={ProjectFour}
                name={"Issue Tracker"}
                description={`
                  <p>
                    Full Stack Frameworks
                    <br/>
                    Milestone Project Four
                  </p>
                `}
              />
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Portfolio;
