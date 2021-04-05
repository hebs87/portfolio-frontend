import DetailCard from '../../Cards/DetailCard';
import ReactHtmlParser from 'react-html-parser';

const Subject = ({dateFrom, dateTo, qualificationType, title, awardingBody, grade, details}) => {
  return (
    <DetailCard>
      <div className="row">
        <div className="col-md-3 bg-primary" data-aos="fade-right" data-aos-offset="50" data-aos-duration="500">
          <div className="card-body cc-education-header">
            <p>{dateFrom}{dateTo && ` - ${dateTo}`}</p>
            <div className="h5">{qualificationType}</div>
          </div>
        </div>
        <div className="col-md-9" data-aos="fade-left" data-aos-offset="50" data-aos-duration="500">
          <div className="card-body">
            <div className="h5">{title}</div>
            <p className="category">{awardingBody}</p>
            {
              grade &&
              <p>
                <strong>Grade:</strong> {grade}
              </p>
            }
            {
              details &&
              <p>
                {ReactHtmlParser(details)}
              </p>
            }
          </div>
        </div>
      </div>
    </DetailCard>
  );
}

export default Subject;
