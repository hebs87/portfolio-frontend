import Profile from '../components/Profile/Profile';
import About from '../components/About/About';

const HomePage = () => {
  return (
    <div className="page-content">
      <div>
        <Profile/>
        <About/>
      </div>
    </div>
  );
};

export default HomePage;
