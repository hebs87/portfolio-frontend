import SectionContainer from '../Container/SectionContainer';
import Subject from './Subject/Subject';

const Education = ({education}) => {
  return (
    <SectionContainer
      id={'education'}
      classes={'cc-education'}
    >
      <div className="h4 text-center mb-4 title">Education</div>
      {
        education && education.map((
          {id, date_from_string, date_to_string, qualification_type, title, awarding_body, grade, details}
        ) => (
          <Subject
            key={id}
            dateFrom={date_from_string}
            dateTo={date_to_string}
            qualificationType={qualification_type}
            title={title}
            awardingBody={awarding_body}
            grade={grade}
            details={details}
          />
        ))
      }
    </SectionContainer>
  );
};

export default Education;
