const ContactContainer = ({children, id}) => {
  return (
    <div className="section" id={id}>
      <div className="cc-contact-information map">
        <div className="container">
          {children}
        </div>
      </div>
    </div>
  );
}

export default ContactContainer;
