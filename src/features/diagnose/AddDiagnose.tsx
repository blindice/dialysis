import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useAtom } from "jotai";

import { addDiagnoseAsync, searchPatientAsync } from "./api";
import { Patient } from "../patient/types";
import { Diagnose } from "./types";
import { userAtom } from "../authentication/atoms";

function AddDiagnose() {
  const [search, setSearch] = useState("");
  const mutation = useMutation({ mutationFn: searchPatientAsync });
  const addMutation = useMutation({ mutationFn: addDiagnoseAsync });
  const [user] = useAtom(userAtom);
  const { register, handleSubmit } = useForm();

  const handleAddDiagnose = (data: any) => {
    const admin = JSON.parse(user);

    const diagnosis: Diagnose = {
      patient_id: mutation.data.id,
      admin_id: admin.id,
      symptoms: data.symptom,
      diagnosis: data.diagnosis,
      medicine: data.medicine,
    };

    addMutation.mutate(diagnosis);
  };

  return (
    <div>
      <div>
        <label>Patient ID:</label>
        <input type="text" onChange={(e) => setSearch(e.target.value)}></input>
        <button onClick={() => mutation.mutate(search)}>Search</button>
      </div>
      <div>
        {mutation.data && (
          <form onSubmit={handleSubmit(handleAddDiagnose)}>
            <label>First Name:</label>
            <input type="text" value={mutation.data.id} readOnly />
            <label>Middle Name:</label>
            <input type="text" value={mutation.data.first_name} readOnly />
            <label>Last Name:</label>
            <input type="text" value={mutation.data.middle_name} readOnly />
            <label>Phone:</label>
            <input type="text" value={mutation.data.last_name} readOnly />
            <label>Age:</label>
            <input type="text" value={mutation.data.age} readOnly />
            <label>Gender:</label>
            <input type="text" value={mutation.data.gender} readOnly />
            <label>Blood Type:</label>
            <input type="text" value={mutation.data.blood_type} readOnly />
            <label>Address:</label>
            <input type="text" value={mutation.data.address} readOnly />
            <label>Symptoms:</label>
            <input type="text" {...register("symptom")} />
            <label>Diagnosis:</label>
            <input type="text" {...register("diagnosis")} />
            <label>Medicine:</label>
            <input type="text" {...register("medicine")} />
            <button type="submit">Save Diagnosis</button>
          </form>
        )}
      </div>
    </div>
  );
}

export default AddDiagnose;
