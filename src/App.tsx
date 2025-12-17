import "./design/App.css";
import TitleBar from "./components/BZH_TitleBar";
import { useBZHContext } from "./context";

function App() {
  const [data] = useBZHContext()

  return (
    <main className={`h-full bg-foreground text-surface ${data.full || 'rounded-md'}`}>
      <TitleBar />
      <div className="p-1">213</div>
    </main>
  );
}

export default App;
