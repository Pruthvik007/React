import { React } from "../../../utils/Imports";
const Input = ({
  onChange,
  regex,
  value,
  type,
  placeholder,
  label,
  disabled,
}) => {
  const handleChange = (fieldName, e) => {
    onChange(fieldName, e.target.value);
  };
  return (
    <div className="form-floating">
      <input
        className="form-control col-12"
        id={label}
        placeholder={placeholder}
        type={type}
        onChange={(e) => {
          handleChange(label, e);
        }}
        value={value}
        disabled={disabled}
      />
      <label htmlFor={label}>{label}</label>
    </div>
  );
};

export default Input;
