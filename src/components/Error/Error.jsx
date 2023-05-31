const Error = ({ children }) => {
  return (
    <div
      className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative text-center mb-5 font-semibold"
      role="alert"
    >
      {children}
    </div>
  );
};
export default Error;
