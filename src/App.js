import {useState, useEffect} from 'react';
import Header from './components/Header/Header';
import HomePage from './pages/Home';
import Footer from './components/Footer/Footer';

import API from './utils/API';

const App = () => {
  const [details, setDetails] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const profile = await callApi('/personal/details');
      const skills = await callApi('/personal/skills');
      const projects = await callApi('/projects/details');
      const experience = await callApi('/personal/experience');
      const education = await callApi('/personal/education');
      const details = {
        profile: profile[0],
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

  const callApi = async (url) => {
    const response = await API.get(url);
    const {data} = response;
    return data;
  }

  console.log(loading);
  return (
    <>
      {
        loading &&
        <h1>Loading</h1>
      }
      {
        !loading && details &&
          <>
            <Header/>
            <HomePage/>
            <Footer/>
          </>
      }
    </>
  );
}

export default App;
