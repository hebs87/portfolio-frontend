import SectionContainer from '../Container/SectionContainer';
import SectionCard from '../Cards/SectionCard';

const About = () => {
  return (
    <SectionContainer id={'about'}>
      <SectionCard>
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className="card-body">
              <div className="h4 mt-0 title">About</div>
              <p>Hello! I am Sunny Hebbar. Full Stack Web Developer.</p>
              <p>My passion is creating stunning full stack websites and applications!</p>
              <p>
                Need a website or application, or interested in collaborating on a cool project?
                {' '}
                <a className="nav-link smooth-scroll about-link" href="/#">Contact</a>
                {' '}
                me!
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="card-body">
              {/* Make reusable component with variable to map over? */}
              <div className="h4 mt-0 title">Basic Information</div>
              <div className="row mt-3">
                <div className="col-sm-4"><strong className="text-uppercase">Email:</strong></div>
                <div className="col-sm-8">sunnyhebbar@hotmail.co.uk</div>
              </div>
              <div className="row mt-3">
                <div className="col-sm-4"><strong className="text-uppercase">Phone:</strong></div>
                <div className="col-sm-8">(+44) 07733 235 188</div>
              </div>
              <div className="row mt-3">
                <div className="col-sm-4"><strong className="text-uppercase">Address:</strong></div>
                <div className="col-sm-8">Liverpool, UK. L10</div>
              </div>
            </div>
          </div>
        </div>
      </SectionCard>
    </SectionContainer>
  );
};

export default About;
