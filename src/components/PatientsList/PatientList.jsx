import Patient from "../Patient/Patient";

const PatientList = ({ patients, setPatient, deletePatient }) => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-auto overflow-y-scroll mb-5">
      {patients && patients.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Pet List</h2>
          <p className="text-lg mt-5 text-center mb-10 font-semibold">
            Manage your {""}
            <span className="text-green-600 font-bold">
              Pets and Appointments
            </span>
          </p>
          <div className="md:h-screen overflow-y-visible">
            {patients.map((pet) => (
              <Patient
                key={pet.id}
                pet={pet}
                setPatient={setPatient}
                deletePatient={deletePatient}
              />
            ))}
          </div>
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">There's no pets</h2>
          <p className="text-lg mt-5 text-center mb-10 font-semibold">
            Start by adding {""}
            <span className="text-green-600 font-bold">
              Pets and they will appear below
            </span>
          </p>
        </>
      )}
    </div>
  );
};
export default PatientList;
