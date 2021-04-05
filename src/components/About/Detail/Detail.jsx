const Detail = ({name, value}) => {
  return (
    <div className="row mt-3">
      <div className="col-sm-4"><strong className="text-uppercase">{name}</strong></div>
      <div className="col-sm-8">{value}</div>
    </div>
  );
};

export default Detail;
