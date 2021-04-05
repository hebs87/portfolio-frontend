import InputContainer from '../InputContainer/InputContainer';

const CustomTextArea = ({name, placeholder, value, onChange, required, error}) => {
  return (
    <InputContainer>
      <div className="form-group" style={{position: "relative"}}>
        <textarea
          className="form-control"
          name={name}
          placeholder={placeholder}
          value={value}
          required={required}
          onChange={onChange}
        />
      </div>
      <span
        style={{
          position: 'absolute',
          color: 'red',
          top: 70,
          fontSize: '0.7rem',
          left: '2rem'
        }}
      >
        {error}
      </span>
    </InputContainer>
  );
};

export default CustomTextArea;
