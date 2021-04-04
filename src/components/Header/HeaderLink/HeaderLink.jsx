import {scrollIntoView} from '../../../utils/helpers';

const HeaderLink = ({id, text}) => {
  return (
    <>
      <a className="nav-link smooth-scroll" onClick={scrollIntoView(id)}>
        {text}
      </a>
    </>
  );
};

export default HeaderLink;
