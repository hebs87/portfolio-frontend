const SectionContainer = ({children, id, classes}) => {
  return (
    <div className="section" id={id}>
      <div className={`container ${classes}`}>
        {children}
      </div>
    </div>
  );
}

export default SectionContainer;
