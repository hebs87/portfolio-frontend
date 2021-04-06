import {useState} from 'react';
import SocialLink from './SocialLinks/SocialLink';

const Footer = ({name, social}) => {
  const [year] = useState(new Date().getFullYear());

  return (
    <footer className="footer">
      <div className="container text-center">
        {
          social && social.map(({name, link, iconClass}) => (
            <SocialLink
              key={name}
              name={name}
              link={link}
              iconClass={iconClass}
            />
          ))
        }
      </div>
      <div className="h4 title text-center">{name}</div>
      <div className="text-center text-muted">
        <p>
          &copy;{' '}
          <span id="copyright">
            {year}
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
