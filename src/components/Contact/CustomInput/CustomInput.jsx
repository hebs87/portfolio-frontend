import InputContainer from '../InputContainer/InputContainer';

const CustomInput = ({iconClass, type, name, placeholder, value, required, onChange}) => {
  return (
    <InputContainer>
      <div className="input-group">
        <span className="input-group-addon">
          <i className={iconClass}/>
        </span>
        <input
          className="form-control"
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          required={required}
          onChange={onChange}
        />
      </div>
    </InputContainer>
  );
}

export default CustomInput;
