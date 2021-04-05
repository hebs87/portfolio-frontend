import Profile from '../components/Profile/Profile';
import About from '../components/About/About';
import Skills from '../components/Skills/Skills';
import Portfolio from '../components/Portfolio/Portfolio';
import Experience from '../components/Experience/Experience';
import Education from '../components/Education/Education';
import Contact from '../components/Contact/Contact';

const HomePage = ({details: {profile, skills, projects, experience, education}}) => {
  return (
    <div className="page-content">
      <div>
        <Profile
          name={profile.name}
          title={profile.job_title}
        />
        <About
          profile={profile}
        />
        <Skills
          skills={skills}
        />
        <Portfolio
          projects={projects}
        />
        <Experience
          experience={experience}
        />
        <Education
          education={education}
        />
        <Contact
          address={profile.address}
          phone={profile.phone}
          email={profile.email}
        />
      </div>
    </div>
  );
};

export default HomePage;
