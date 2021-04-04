const SocialLink = ({link, title, iconClass}) => {
  return (
    <a
      className="btn btn-default btn-round btn-lg btn-icon"
      href={link}
      rel="tooltip noreferrer"
      title={title}
      target="_blank"
    >
      <i className={iconClass}/>
    </a>
  );
};

export default SocialLink;
