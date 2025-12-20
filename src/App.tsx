import TitleBar from "./components/BZH_TitleBar";
import { useBZHContext } from "./context";
import { RouterProvider } from "react-router";
import router from "./router";
import "./design/App.css";

function App() {
  const [data] = useBZHContext()

  return (
    <main className={`h-full bg-background overflow-y-auto text-surface ${data.full || 'rounded-md'}`}>
      <TitleBar />
      <div className="main">
        <RouterProvider router={router} />
      </div>
    </main>
  );
}

export default App;
