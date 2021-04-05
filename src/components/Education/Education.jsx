import SectionContainer from '../Container/SectionContainer';
import Subject from './Subject/Subject';

const Education = () => {
  return (
    <SectionContainer
      id={'education'}
      classes={'cc-education'}
    >
      <div className="h4 text-center mb-4 title">Education</div>
      <Subject
        dateFrom={'2019'}
        qualificationType={'Diploma'}
        title={'Full Stack Web Development'}
        awardingBody={'Code Institute via The Learning People'}
        grade={'First Class Honours'}
        details={`
          <strong>Technologies Learnt:</strong>
          <br/>
          <strong>UI/UX:</strong> Responsive Design, Wireframes, User Stories
          <br/>
          <strong>Front-End:</strong> HTML5, CSS3/SASS
        `}
      />
    </SectionContainer>
  );
};

export default Education;
