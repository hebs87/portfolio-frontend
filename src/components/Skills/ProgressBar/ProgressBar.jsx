const ProgressBar = ({skill, percentage}) => {
  return (
    <div className="col-md-6">
      <div className="progress-container progress-primary"><span className="progress-badge">{skill}</span>
        <div className="progress">
          <div
            className="progress-bar progress-bar-primary"
            data-aos="progress-full" data-aos-offset="10"
            data-aos-duration="2000"
            role="progressbar"
            aria-valuenow={percentage}
            aria-valuemin="0"
            aria-valuemax="100"
            style={{width: `${percentage}%`}}
          />
          <span className="progress-value">{percentage}%</span>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
