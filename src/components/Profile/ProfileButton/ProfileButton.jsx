const ProfileButton = ({classes, href, onClick, text}) => {
  return (
    <>
      <a
        data-aos="zoom-in"
        data-aos-anchor="data-aos-anchor"
        className={`btn btn-primary ${classes}`}
        href={href ? href : () => false}
        onClick={onClick ? onClick : null}
        target={href ? "_blank" : null}
        rel="noreferrer"
      >
        {text}
      </a>
    </>
  );
};

export default ProfileButton;
