import { useState, useEffect } from "react";
import Error from "../Error/Error";

const MonitoringForm = ({ patients, setPatients, patient, setPatient }) => {
  const [petName, setPetName] = useState("");
  const [guardian, setGuardian] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [comments, setComments] = useState("");

  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(patient).length > 0) {
      setPetName(patient.petName);
      setGuardian(patient.guardian);
      setEmail(patient.email);
      setDate(patient.date);
      setComments(patient.comments);
    }
  }, [patient]);

  const generateId = () => {
    const random = Math.random().toString(36).substring(2);
    const date = Date.now().toString(36);

    return random + date;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([petName, guardian, email, date, comments].includes("")) {
      console.log("Campos vacios");
      setError(true);
      return;
    }

    setError(false);

    const newPatient = {
      petName,
      guardian,
      email,
      date,
      comments,
    };

    if (patient.id) {
      newPatient.id = patient.id;
      const updatedPatients = patients.map((patientState) =>
        patientState.id === patient.id ? newPatient : patientState
      );

      setPatients(updatedPatients);
      setPatient({});
    } else {
      newPatient.id = generateId();
      setPatients([...patients, newPatient]);
    }

    //Reset form
    setPetName("");
    setGuardian("");
    setEmail("");
    setDate("");
    setComments("");
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Pets Monitoring</h2>
      <p className="text-lg mt-5 text-center mb-10 font-semibold">
        Add Pets and {""}
        <span className="text-green-600 font-bold text-lg">Manage them</span>
      </p>

      <form
        className="bg-white shadow-xl rounded-lg py-10 px-5 mb-10"
        onSubmit={handleSubmit}
      >
        {error && (
          <Error>
            <p>All fields are required</p>
          </Error>
        )}
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="petname"
          >
            Pet Name
          </label>
          <input
            id="petname"
            type="text"
            placeholder="Pet Name"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={petName}
            onChange={(e) => setPetName(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="guardian"
          >
            Pet Guardian
          </label>
          <input
            id="guardian"
            type="text"
            placeholder="Full Name"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={guardian}
            onChange={(e) => setGuardian(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="email"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            className="block text-gray-700 uppercase font-bold"
            htmlFor="date"
          >
            CheckOut Date
          </label>
          <input
            id="date"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="comments"
            className="block text-gray-700 uppercase font-bold"
          >
            Comments
          </label>
          <textarea
            id="comments"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Write your comments here..."
            value={comments}
            onChange={(e) => setComments(e.target.value)}
          />
        </div>

        <input
          type="submit"
          className="bg-green-600 w-full p-3 text-white uppercase font-bold hover:bg-green-700 cursor-pointer transition-all rounded-md"
          value={patient.id ? "Update" : "Send"}
        />
      </form>
    </div>
  );
};
export default MonitoringForm;
