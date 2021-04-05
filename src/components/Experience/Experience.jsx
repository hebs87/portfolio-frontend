import SectionContainer from '../Container/SectionContainer';
import Job from './Job/Job';

const Experience = () => {
  return (
    <SectionContainer
      id={'experience'}
      classes={'cc-experience'}
    >
      <div className="h4 text-center mb-4 title">Work Experience</div>
      <Job
        dateFrom={'June 2015'}
        dateTo={'Present'}
        company={'Ombudsman Services'}
        jobTitle={'Operational Team Manager'}
        description={`
          Operational lead for POPLA sector, responsible for building and maintaining stakeholder relationships.
          <br/>
          Manage 12 FTEs, provide cover for operational manager, conduct effective coaching, manage absence,
          monitor
          caseloads and KPIs, review current processes, identify potential improvements and implement them.
          Build team
          objectives to meet business objectives and goals and ensure team exceeds targets.
          <br/>
          Implemented new Case Management system as Key User in the department.
        `}
      />
    </SectionContainer>
  );
};

export default Experience;
