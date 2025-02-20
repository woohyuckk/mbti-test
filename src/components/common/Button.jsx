// File: src/components/Button.jsx

const Button = ({ type = 'button', onClick, children }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
    >
      {children}
    </button>
  );
};

export default Button;
