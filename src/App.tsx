import "./App.css";
import AppProvider from "../components/AppProvider";
import Desktop from "../components/desktop/Desktop";

function App() {
  return (
    <AppProvider>
      <Desktop />
    </AppProvider>
  );
}

export default App;
