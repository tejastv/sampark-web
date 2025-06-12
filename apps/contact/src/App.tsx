import "./App.css";
import { AuthProvider, useAuth } from "@repo/auth";

function App() {
  return (
    <>
      <AuthProvider>Contact</AuthProvider>
    </>
  );
}

export default App;
