import SectionContainer from '../Container/SectionContainer';
import SectionCard from '../Cards/SectionCard';
import Detail from './Detail/Detail';
import ReactHtmlParser from 'react-html-parser';

const About = ({profile: {about, email, phone, address}}) => {
  return (
    <SectionContainer id={'about'}>
      <SectionCard>
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className="card-body">
              <div className="h4 mt-0 title">About</div>
              {ReactHtmlParser(about)}
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="card-body">
              <div className="h4 mt-0 title">Basic Information</div>
              <Detail
                name={'Email:'}
                value={email}
              />
              <Detail
                name={'Phone:'}
                value={phone}
              />
              <Detail
                name={'Address:'}
                value={address}
              />
            </div>
          </div>
        </div>
      </SectionCard>
    </SectionContainer>
  );
};

export default About;
