const HeaderLink = ({text, onClick}) => {
  return (
    <>
      <a
        href={() => false}
        className="nav-link smooth-scroll"
        onClick={onClick}
      >
        {text}
      </a>
    </>
  );
};

export default HeaderLink;
