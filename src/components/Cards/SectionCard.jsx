const SectionCard = ({children}) => {
  return (
    <div className="card" data-aos="fade-up" data-aos-offset="10">
      {children}
    </div>
  );
};

export default SectionCard;
