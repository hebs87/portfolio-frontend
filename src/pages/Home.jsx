import Profile from '../components/Profile/Profile';
import About from '../components/About/About';
import Skills from '../components/Skills/Skills';

const HomePage = () => {
  return (
    <div className="page-content">
      <div>
        <Profile/>
        <About/>
        <Skills/>
      </div>
    </div>
  );
};

export default HomePage;
