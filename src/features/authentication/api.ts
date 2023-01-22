import { supabase } from "../../app/db";
import { Admin } from "../../types/Admin";

export const loginAsync = async ({
  username,
  password,
}: {
  username: string;
  password: string;
}): Promise<Admin> => {
  const response = await supabase
    .from("admin")
    .select("id, user_name, first_name, last_name, phone, created_at")
    .throwOnError()
    .eq("user_name", username)
    .eq("password", password)
    .single();

  return response.data as Admin;
};
