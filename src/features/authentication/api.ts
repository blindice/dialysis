import { supabase } from "../../app/db";
import { Admin } from "../../types/Admin";

export const loginAsync = async (): Promise<Admin[]> => {
  const response = await supabase.from("admin").select().throwOnError();
  return response.data as Admin[];
};
