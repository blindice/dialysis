import { LoginPage } from "./pages/LoginPage";
import { useAtom } from "jotai";
import MainPage from "./pages/MainPage";
import { userAtom } from "./features/authentication/atoms";

function App() {
  const [user] = useAtom(userAtom);
  return <>{user === "" ? <LoginPage /> : <MainPage />}</>;
}

export default App;
