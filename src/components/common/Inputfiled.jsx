
const InputField = ({
  label,
  type = 'text',
  id,
  name,
  placeholder,
  value,
  onChange,
  error,
}) => {
  return (
    <div >
      <label htmlFor={id} className="block text-gray-700 mb-2 font-bold ">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200"
      />
      {error && <span className="text-sm text-red-500 mt-1 block">{error}</span>}
    </div>
  );
};

export default InputField;
