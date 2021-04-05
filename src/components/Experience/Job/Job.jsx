import DetailCard from '../../Cards/DetailCard';
import ReactHtmlParser from 'react-html-parser';

const Job = ({dateFrom, dateTo, company, jobTitle, description}) => {
  return (
    <DetailCard>
      <div className="row">
        <div className="col-md-3 bg-primary" data-aos="fade-right" data-aos-offset="50" data-aos-duration="500">
          <div className="card-body cc-experience-header">
            <p>{dateFrom} - {dateTo}</p>
            <div className="h5">{company}</div>
          </div>
        </div>
        <div className="col-md-9" data-aos="fade-left" data-aos-offset="50" data-aos-duration="500">
          <div className="card-body">
            <div className="h5">{jobTitle}</div>
            <p>
              {ReactHtmlParser(description)}
            </p>
          </div>
        </div>
      </div>
    </DetailCard>
  );
};

export default Job;
