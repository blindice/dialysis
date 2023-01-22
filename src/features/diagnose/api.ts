import { supabase } from "../../app/db";
import { Diagnose } from "./types";

export const searchPatientAsync = async (id: string) => {
  const response = await supabase
    .from("patient")
    .select()
    .eq("id", id)
    .throwOnError()
    .single();

  return response.data;
};

export const addDiagnoseAsync = async (diagnose: Diagnose) => {
  const response = await supabase
    .from("diagnosis")
    .insert(diagnose)
    .throwOnError();

  console.log(response);
};
