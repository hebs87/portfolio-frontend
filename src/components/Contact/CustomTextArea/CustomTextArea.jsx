import InputContainer from '../InputContainer/InputContainer';

const CustomTextArea = ({name, placeholder, value, onChange, required}) => {
  return (
    <InputContainer>
      <div className="form-group">
        <textarea
          className="form-control"
          name={name}
          placeholder={placeholder}
          value={value}
          required={required}
          onChange={onChange}
        />
      </div>
    </InputContainer>
  );
};

export default CustomTextArea;
