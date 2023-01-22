export type Patient = {
  first_name: string;
  middle_name: string;
  last_name: string;
  phone: string;
  age: number;
  gender: string;
  blood_type: string;
  address: string;
};

export type PatientHistory = {
  id: number;
  first_name: string;
  middle_name: string;
  last_name: string;
  phone: string;
  age: number;
  gender: string;
  blood_type: string;
  address: string;
  symptoms: string;
  diagnosis: string;
  medicine: string;
  created_at: string;
};
