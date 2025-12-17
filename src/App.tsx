import TitleBar from "./components/BZH_TitleBar";
import { useBZHContext } from "./context";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./view/Home";
import "./design/App.css";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
    // loader: loadRootData,
  },
]);

function App() {
  const [data] = useBZHContext()

  return (
    <main className={`h-full bg-foreground text-surface ${data.full || 'rounded-md'}`}>
      <TitleBar />
      <div className="p-1 main">
        <RouterProvider router={router} />
      </div>
    </main>
  );
}

export default App;
