import "./design/App.css";
import TitleBar from "@/components/element/BZHTitleBar";
import { useBZHContext } from "./context";
import { Outlet } from "react-router";

function App() {
  const [data] = useBZHContext()

  return (
    <main className={`h-full ${data.full || 'rounded-sm'}`}>
      <TitleBar />
      <div className="p-2">
        <Outlet />
      </div>
    </main>
  );
}

export default App;
