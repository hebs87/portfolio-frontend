import SectionContainer from '../Container/SectionContainer';
import SectionCard from '../Cards/SectionCard';
import ProgressBar from './ProgressBar/ProgressBar';

const Skills = ({skills}) => {
  return (
    <SectionContainer id={'skills'}>
      <div className="h4 text-center mb-4 title">Professional Skills</div>
      <SectionCard>
        <div className="card-body">
          <div className="row">
            {
              skills && skills.map(({id, skill, percentage_completed}) => (
                <ProgressBar
                  key={id}
                  skill={skill}
                  percentage={percentage_completed}
                />
              ))
            }
          </div>
        </div>
      </SectionCard>
    </SectionContainer>
  );
};

export default Skills;
