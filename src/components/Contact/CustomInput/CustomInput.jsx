import InputContainer from '../InputContainer/InputContainer';

const CustomInput = ({iconClass, type, name, placeholder, value, required, onChange, error}) => {
  return (
    <InputContainer>
      <div className="input-group" style={{position: "relative"}}>
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
      <span
        style={{
          position: 'absolute',
          color: 'red',
          top: 40,
          fontSize: '0.7rem',
          left: '2rem'
        }}
      >
        {error}
      </span>
    </InputContainer>
  );
}

export default CustomInput;
