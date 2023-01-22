import { supabase } from "../../app/db";
import { Patient } from "./types";

export const addPatientAsync = async (patient: Patient) => {
  const response = await supabase
    .from("patient")
    .insert(patient)
    .throwOnError();
};

export const getPatientsHistoryAsync = async () => {
  //   const response = await supabase
  //     .from("diagnosis")
  //     .select(
  //       "id, symptoms, diagnosis, medicine, created_at, patient(id, first_name, middle_name, last_name, phone, age, gender, blood_type, address)"
  //     )
  //     .throwOnError();

  const response = await supabase.from("patient").select().throwOnError();

  console.log(response.data);
  return response.data;
};
