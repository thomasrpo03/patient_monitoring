import { useEffect, useState } from "react";
import MonitoringForm from "./components/Form/MonitoringForm";
import Header from "./components/Header/Header";
import PatientList from "./components/PatientsList/PatientList";

const App = () => {
  const [patients, setPatients] = useState(
    JSON.parse(localStorage.getItem("patients")) ?? []
  );
  const [patient, setPatient] = useState({});

  useEffect(() => {
    const getLS = () => {
      const patientsLS = JSON.parse(localStorage.getItem("patients")) ?? [];
      setPatients(patientsLS);
    };

    getLS();
  }, []);

  useEffect(() => {
    localStorage.setItem("patients", JSON.stringify(patients));
  }, [patients]);

  const deletePatient = (id) => {
    const updatedPatients = patients.filter((patient) => patient.id !== id);
    setPatients(updatedPatients);
  };

  return (
    <div className="container mx-auto mt-auto pt-5">
      <Header />
      <div className="mt-12 md:flex">
        <MonitoringForm
          patients={patients}
          setPatients={setPatients}
          patient={patient}
          setPatient={setPatient}
        />
        <PatientList
          setPatient={setPatient}
          patients={patients}
          deletePatient={deletePatient}
        />
      </div>
    </div>
  );
};
export default App;
