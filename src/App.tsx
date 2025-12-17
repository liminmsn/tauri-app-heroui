import "./design/App.css";
import TitleBar from "./components/BZH_TitleBar";
import { useBZHContext } from "./context";
import { useEffect } from "react";
import { fetch } from "@tauri-apps/plugin-http";

function App() {
  const [data] = useBZHContext()

  useEffect(() => {
    fetch('https://tauri.app/zh-cn/plugin/http-client/', {
      method: 'GET'
    }).then(res => {
      console.log(res);

    })
  }, [])

  return (
    <main className={`h-full bg-foreground text-surface ${data.full || 'rounded-md'}`}>
      <TitleBar />
      <div className="p-1">213</div>
    </main>
  );
}

export default App;
