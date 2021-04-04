import Profile from '../components/Profile/Profile';
import About from '../components/About/About';
import Skills from '../components/Skills/Skills';
import Portfolio from '../components/Portfolio/Portfolio';

const HomePage = () => {
  return (
    <div className="page-content">
      <div>
        <Profile/>
        <About/>
        <Skills/>
        <Portfolio/>
      </div>
    </div>
  );
};

export default HomePage;
