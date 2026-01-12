import "./design/App.css";
import TitleBar from "@/components/element/BZHTitleBar";
import logo from '@/assets/logo.png';
import { useBZHContext } from "./context";
import { Outlet } from "react-router";

function App() {
  const [data] = useBZHContext()

  return (
    <main className={`h-full ${data.full || 'rounded-sm'}`}>
      <TitleBar />
      <div className="box-border overflow-y-auto">
        <img className="absolute bottom-2 right-2" width={100} src={logo} />
        <Outlet />
      </div>
    </main>
  );
}

export default App;
