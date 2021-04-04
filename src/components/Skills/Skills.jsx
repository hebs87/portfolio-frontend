import SectionContainer from '../Container/SectionContainer';
import SectionCard from '../Cards/SectionCard';
import ProgressBar from './ProgressBar/ProgressBar';

const Skills = () => {
  return (
    <SectionContainer id={'skills'}>
      <div className="h4 text-center mb-4 title">Professional Skills</div>
      <SectionCard>
        <div className="card-body">
          <div className="row">
            <ProgressBar
              skill={'HTML'}
              percentage={'75'}
            />
            <ProgressBar
              skill={'CSS3/SASS'}
              percentage={'75'}
            />
          </div>
        </div>
      </SectionCard>
    </SectionContainer>
  );
};

export default Skills;
