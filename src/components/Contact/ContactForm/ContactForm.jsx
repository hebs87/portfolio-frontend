import {useState} from 'react';
import CustomInput from '../CustomInput/CustomInput';
import CustomTextArea from '../CustomTextArea/CustomTextArea';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');
  const [subject, setSubject] = useState('');
  const [subjectError, setSubjectError] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [message, setMessage] = useState('');
  const [messageError, setMessageError] = useState('');

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

  const formIsValid = () => {
    // TODO: logic to check for errors and set error states
    if (!name) {
      setNameError('Please enter a name');
      return false;
    }
    if (!subject) {
      setSubjectError('Please enter a subject');
      return false;
    }
    // TODO: Validate email with Regex
    if (!email) {
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
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formIsValid()) {
      submitForm();
    }
  };

  return (
    <div className="col-md-6">
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
          />
          <CustomInput
            iconClass={"fa fa-file-text"}
            type={"text"}
            name={"subject"}
            placeholder={"Subject"}
            value={subject}
            required
            onChange={(event) => onInputChange(event)}
          />
          <CustomInput
            iconClass={"fa fa-envelope"}
            type={"email"}
            name={"email"}
            placeholder={"E-mail"}
            value={email}
            required
            onChange={(event) => onInputChange(event)}
          />
          <CustomTextArea
            name={"message"}
            placeholder={"Your Message"}
            value={message}
            required
            onChange={(event) => onInputChange(event)}
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
