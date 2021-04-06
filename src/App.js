import {useState, useEffect} from 'react';
import Spinner from './components/Spinner/Spinner';
import Header from './components/Header/Header';
import HomePage from './pages/Home';
import Footer from './components/Footer/Footer';

import API from './utils/API';

const App = () => {
  const [details, setDetails] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // getData is only used in useEffect, so it is declared here to resolve console warning
    const getData = async () => {
      try {
        const profile = await callApi('/personal/details');
        const skills = await callApi('/personal/skills');
        const projects = await callApi('/projects/details');
        const experience = await callApi('/personal/experience');
        const education = await callApi('/personal/education');
        const details = {
          profile: profile[0],
          social: profile[0].social_media_details,
          skills,
          projects,
          experience,
          education
        }
        setDetails(details);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        // TODO: Forward to 404 erorr page once created
        console.log(err);
      }
    };
    // Call function as soon as it is declared
    getData();
  }, []);

  const callApi = async (url) => {
    const response = await API.get(url);
    const {data} = response;
    return data;
  }

  return (
    <>
      {
        loading &&
        <Spinner/>
      }
      {
        !loading && details &&
          <>
            <Header
              name={details.profile.name}
            />
            <HomePage
              details={details}
            />
            <Footer
              name={details.profile.name}
              social={details.social}
            />
          </>
      }
    </>
  );
};

export default App;
