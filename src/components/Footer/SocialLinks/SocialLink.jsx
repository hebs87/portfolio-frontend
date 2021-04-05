const SocialLink = ({name, link, iconClass}) => {
  return (
    <>
      <a
        className={`cc-${name} btn btn-link`}
        href={link}
        target="_blank"
        rel="noreferrer"
      >
        <i
          className={`${iconClass} fa-2x`}
          aria-hidden="true"
        />
      </a>
    </>
  );
}

export default SocialLink;
