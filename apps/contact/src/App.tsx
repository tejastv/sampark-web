import "./App.css";
import { AuthProvider } from "auth/hooks/AuthProvider";

function App() {
  return (
    <>
      <AuthProvider>Contact</AuthProvider>
    </>
  );
}

export default App;
