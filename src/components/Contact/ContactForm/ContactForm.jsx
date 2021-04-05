import {useState} from 'react';
import CustomInput from '../CustomInput/CustomInput';
import CustomTextArea from '../CustomTextArea/CustomTextArea';
import FlashMessage from '../../FlashMessage/FlashMessage';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');
  const [subject, setSubject] = useState('');
  const [subjectError, setSubjectError] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [message, setMessage] = useState('');
  const [messageError, setMessageError] = useState('');
  const [showFlashMessage, setShowFlashMessage] = useState(false);

  const onInputChange = (event) => {
    switch (event.target.name) {
      case 'name':
        setNameError('');
        setName(event.target.value);
        break;
      case 'subject':
        setSubjectError('');
        setSubject(event.target.value);
        break;
      case 'email':
        setEmailError('');
        setEmail(event.target.value);
        break;
      case 'message':
        setMessageError('');
        setMessage(event.target.value);
        break;
      default:
        break;
    }
  };

  const isEmailValid = (email) => {
    // Check if email is a valid email
    const pattern = '^(([^<>()\\[\\]\\.,;:\\s@\\"]+(\\.[^<>()\\[\\]\\.,;:\\s@\\"]+)*)|(\\".+\\"))@(([^<>()[\\]\\.,;:\\s@\\"]+\\.)+[^<>()[\\]\\.,;:\\s@\\"]{2,})$';
    return email.match(pattern);
  };

  const formIsValid = () => {
    if (!name) {
      setNameError('Please enter your name');
      return false;
    }
    if (!subject) {
      setSubjectError('Please enter a subject');
      return false;
    }
    if (!email || (email && !isEmailValid(email))) {
      setEmailError('Please enter a valid email');
      return false;
    }
    if (!message) {
      setMessageError('Please enter a message');
      return false;
    }
    return true;
  };

  const submitForm = () => {
    // TODO: Logic to post form data to API
    console.log('form submitted');
    setShowFlashMessage(true);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formIsValid()) {
      submitForm();
    }
  };

  return (
    <div className="col-md-6">
      {
        showFlashMessage &&
        <FlashMessage setShowFlashMessage={setShowFlashMessage} />
      }
      <div className="card-body">
        <form>
          <div className="p pb-3"><strong>Feel free to contact me </strong></div>
          <CustomInput
            iconClass={"fa fa-user-circle"}
            type={"text"}
            name={"name"}
            placeholder={"Name"}
            value={name}
            required
            onChange={(event) => onInputChange(event)}
            error={nameError}
          />
          <CustomInput
            iconClass={"fa fa-file-text"}
            type={"text"}
            name={"subject"}
            placeholder={"Subject"}
            value={subject}
            required
            onChange={(event) => onInputChange(event)}
            error={subjectError}
          />
          <CustomInput
            iconClass={"fa fa-envelope"}
            type={"email"}
            name={"email"}
            placeholder={"E-mail"}
            value={email}
            required
            onChange={(event) => onInputChange(event)}
            error={emailError}
          />
          <CustomTextArea
            name={"message"}
            placeholder={"Your Message"}
            value={message}
            required
            onChange={(event) => onInputChange(event)}
            error={messageError}
          />
          <div className="row">
            <div className="col">
              <button
                className="btn btn-primary"
                onClick={(event) => handleSubmit(event)}
              >
                Send
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
