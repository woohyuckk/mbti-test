const InputForm = ({ title, children, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className="max-w-md mx-auto my-8 p-8 bg-white rounded-lg shadow-md flex flex-col gap-3">
      {title && <h2 className="text-2xl font-semibold mb-6 text-center">{title}</h2>}
      {children}
    </form>
  );
};

export default InputForm;