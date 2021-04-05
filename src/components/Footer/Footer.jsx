import {useState} from 'react';
import SocialLink from './SocialLinks/SocialLink';
import {SOCIAL_LINKS} from '../../utils/variables';

const Footer = ({name}) => {
  const [year] = useState(new Date().getFullYear());

  return (
    <footer className="footer">
      <div className="container text-center">
        {
          SOCIAL_LINKS && SOCIAL_LINKS.map(({name, link, iconClass}) => (
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
