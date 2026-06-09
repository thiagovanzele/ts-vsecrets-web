import "./App.css";
import { MenuLateral } from "./components/MenuLateral";
import { AppRoutes } from "./routes";

function App() {
  return (
    <div className="app">
      <MenuLateral />

      <main>
        <AppRoutes />
      </main>
    </div>
  );
}

export default App;
