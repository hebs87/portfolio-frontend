import SectionContainer from '../Container/SectionContainer';
import Job from './Job/Job';

const Experience = ({experience}) => {
  return (
    <SectionContainer
      id={'experience'}
      classes={'cc-experience'}
    >
      <div className="h4 text-center mb-4 title">Work Experience</div>
      {
        experience && experience.map(({id, date_from_string, date_to_string, company, job_title, description}) => (
          <Job
            key={id}
            dateFrom={date_from_string}
            dateTo={date_to_string}
            company={company}
            jobTitle={job_title}
            description={description}
          />
        ))
      }
    </SectionContainer>
  );
};

export default Experience;
