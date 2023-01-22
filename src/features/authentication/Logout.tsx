import { useAtom } from "jotai";

import { userAtom } from "./atoms";

function Logout() {
  const [, setUser] = useAtom(userAtom);
  return (
    <div>
      <button onClick={() => setUser("")}>Logout</button>
    </div>
  );
}

export default Logout;
