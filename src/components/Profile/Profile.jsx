import ProfileButton from './ProfileButton/ProfileButton';
import SocialLink from './SocialLinks/SocialLink';
import {scrollIntoView} from '../../utils/helpers';

import bgImage from '../../assets/images/cc-bg-1.jpg';
import profilePic from '../../assets/images/sunny.jpg';
import  CV from '../../assets/files/sunny-hebbar-resume.pdf';
import {SOCIAL_LINKS} from '../../utils/variables';

const Profile = () => {
  return (
    <div className="profile-page">
      <div className="wrapper">
        <div className="page-header page-header-small" filter-color="green">
          <div className="page-header-image" data-parallax="true"
               style={{backgroundImage: `url(${bgImage})`}}>
          </div>
          <div className="container">
            <div className="content-center">
              <div className="cc-profile-image">
                <a onClick={scrollIntoView('top')}><
                  img src={profilePic} alt="Profile"/>
                </a>
              </div>
              <div className="h2 title">Sunny Hebbar</div>
              <p className="category text-white">Full Stack Web Developer</p>
              <ProfileButton
                classes="smooth-scroll mr-2"
                onClick={scrollIntoView('contact')}
                text={"Hire Me"}
              />
              <ProfileButton
                href={CV}
                text={"See CV"}
              />
            </div>
          </div>
          <div className="section">
            <div className="container">
              <div className="button-container">
                {
                  SOCIAL_LINKS && SOCIAL_LINKS.map(({link, title, iconClass}) => (
                    <SocialLink
                      key={link}
                      link={link}
                      title={title}
                      iconClass={iconClass}
                    />
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
