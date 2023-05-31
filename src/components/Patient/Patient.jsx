const Patient = ({ pet, setPatient, deletePatient }) => {
  const { petName, guardian, email, date, comments, id } = pet;

  const handleDelete = () => {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete ${petName}?`
    );

    if (confirmDelete) {
      deletePatient(id);
    }
  };
  return (
    <div className="mx-5 my-7 bg-white shadow-xl px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Name: {""}
        <span className="font-normal normal-case">{petName}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Guardian: {""}
        <span className="font-normal normal-case">{guardian}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: {""}
        <span className="font-normal normal-case">{email}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        CheckOut Date: {""}
        <span className="font-normal normal-case">{date}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Comments: {""}
        <span className="font-normal normal-case">{comments}</span>
      </p>
      <div className="flex justify-between mt-5">
        <button
          className="py-2 px-10 bg-green-600 hover:bg-green-700 text-white font-bold uppercase rounded-lg"
          type="button"
          onClick={() => setPatient(pet)}
        >
          Editar
        </button>
        <button
          className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
          type="button"
          onClick={handleDelete}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};
export default Patient;
