import { Outlet, RouterProvider } from "react-router";
import TitleBar from "./components/BZH_TitleBar";
import { useBZHContext } from "./context";
import { UIEvent, useRef } from "react";
import router from "./router";
import "./design/App.css";
import { Icon } from "@iconify/react";
import { Button, Label } from "@heroui/react";

export function AppLayout() {
  const [data, dispatch] = useBZHContext()
  const refMain = useRef<HTMLDivElement>(null)

  function scroll(e: UIEvent<HTMLElement, globalThis.UIEvent>) {
    const dom = e.target as HTMLDivElement
    const scrollHeight = dom.scrollHeight - document.body.clientHeight;
    const speed = scrollHeight - dom.scrollTop;
    const percentage = Number(1 - speed / scrollHeight).toFixed(2);
    dispatch({ type: 'percentage', data: { percentage } })
    // console.dir(percentage);
  }

  return <main className={`h-full bg-background overflow-y-auto text-surface ${data.full || 'rounded-md'}`} ref={refMain} onScroll={(e) => scroll(e)}>
    <TitleBar />
    <div className="main">
      <Outlet />
    </div>
    {
      <div className="absolute bottom-4 right-4" style={{ transition: '250ms', opacity: data.percentage > 0.4 ? 1 : 0 }}>
        <Label onClick={() => refMain.current?.scrollTo({ top: 0, behavior: 'smooth' })}>
          <Icon icon="material-symbols-light:arrow-circle-up" height={40} />
        </Label>
      </div>
    }
  </main >
}

function App() {
  return <RouterProvider router={router} />;
}

export default App;
