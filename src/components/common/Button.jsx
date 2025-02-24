// File: src/components/Button.jsx

const Button = ({ type = "button", onClick, isDisabled, children }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={!!isDisabled?.password || !!isDisabled?.id}
      className="w-full mb-4 inline-block bg-primary text-white font-bold py-2 rounded-md hover:bg-hover_color transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {children}
    </button>
  );
};

export default Button;
