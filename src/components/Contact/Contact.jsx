import ContactContainer from '../Container/ContactContainer';
import ContactCard from '../Cards/ContactCard';
import ContactForm from "./ContactForm/ContactForm";

import StaticMap from '../../assets/images/staticmap.png';

const Contact = ({address, phone, email}) => {
  return (
    <ContactContainer
      id={'contact'}
      image={StaticMap}
    >
        <div className="cc-contact">
          <div className="row">
            <div className="col-md-9">
              <ContactCard>
                <div className="h4 text-center title">Contact Me</div>
                <div className="row">
                  <ContactForm/>
                  <div className="col-md-6">
                    <div className="card-body">
                      <p className="mb-0"><strong>Address </strong></p>
                      <p className="pb-2">{address}</p>
                      <p className="mb-0"><strong>Phone</strong></p>
                      <p className="pb-2">{phone}</p>
                      <p className="mb-0"><strong>Email</strong></p>
                      <p>{email}</p>
                    </div>
                  </div>
                </div>
              </ContactCard>
            </div>
          </div>
        </div>
    </ContactContainer>
  );
}

export default Contact;
