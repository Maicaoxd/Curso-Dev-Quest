import { BrowserRouter } from "react-router-dom";
import AppProviders from "./app/providers";
import { AppRoutes } from "./app/routes";

function App() {
  return (
    <AppProviders>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AppProviders>
  );
}

export default App;
