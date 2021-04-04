import ReactHtmlParser from 'react-html-parser';

const Project = ({link, image, name, description}) => {
  return (
    <div className="col-md-6">
      <div
        className="cc-porfolio-image img-raised"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
        >
          <figure className="cc-effect">
            <img src={image} alt={name}/>
            <figcaption>
              <div className="h4">{name}</div>
              {ReactHtmlParser(description)}
            </figcaption>
          </figure>
        </a>
      </div>
    </div>
  );
};

export default Project;
