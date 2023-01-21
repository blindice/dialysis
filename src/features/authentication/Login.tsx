import React, { useState, useEffect } from "react";

import { Admin } from "../../types/Admin";
import { loginAsync } from "./api";

export const Login = () => {
  const [users, setUsers] = useState<Admin[]>([] as Admin[]);

  useEffect(() => {
    (async () => {
      const admins = await loginAsync();
      setUsers(admins);
    })();
  }, []);

  return (
    <div>
      {users.map((u: Admin) => (
        <p key={u.id}>{u.first_name}</p>
      ))}
    </div>
  );
};
