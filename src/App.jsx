import Router from "./app/Router";
import { useUserContext } from "./providers/UserProvider";
import Login from "./pages/Login";

const App = () => {
  const { user } = useUserContext();
  return <div>{user ? <Router /> : <Login />}</div>;
};

export default App;
