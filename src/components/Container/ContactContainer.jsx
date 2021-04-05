const ContactContainer = ({children, id, image}) => {
  return (
    <div className="section" id={id}>
      <div
        className="cc-contact-information map"
        style={{backgroundImage: `url(${image})`}}
      >
        <div className="container">
          {children}
        </div>
      </div>
    </div>
  );
}

export default ContactContainer;
