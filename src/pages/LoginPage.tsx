import { useAtom } from "jotai";

import { Login } from "../features/authentication/Login";
import { toggleAtom } from "../atoms";
import AddUser from "../features/user/AddUser";

export const LoginPage = () => {
  const [toggle] = useAtom(toggleAtom);
  return (
    <div>
      <div>
        <Login />
      </div>
      {/* <div style={{ position: "relative" }}>
        <AddUser />
      </div> */}
    </div>
  );
};
