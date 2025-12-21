import TitleBar from "./components/BZH_TitleBar";
import { useBZHContext } from "./context";
import { Outlet, RouterProvider } from "react-router";
import router from "./router";
import "./design/App.css";

export function AppLayout() {
  const [data] = useBZHContext()

  return <main className={`h-full bg-background overflow-y-auto text-surface ${data.full || 'rounded-md'}`}>
    <TitleBar />
    <div className="main">
      <Outlet />
    </div>
  </main>
}

function App() {
  return <RouterProvider router={router} />;
}

export default App;
