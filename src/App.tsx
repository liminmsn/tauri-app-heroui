import "./design/App.css";
import TitleBar from "./components/BZH_TitleBar";
import { useBZHContext } from "./context";
import { RouterProvider } from "react-router";
import router from "./router";

function App() {
  const [data] = useBZHContext()

  return (
    <main className={`h-full ${data.full || 'rounded-sm'}`}>
      <TitleBar />
      <div className="p-2">
        <RouterProvider router={router} />
      </div>
    </main>
  );
}

export default App;
