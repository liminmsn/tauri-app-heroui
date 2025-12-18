import { Button, Input, Tabs } from "@heroui/react";
import { useEffect, useState } from "react";
import { BZHNet } from "../net/BZHNet";
import { Icon } from "@iconify/react";
import { useBZHContext } from "../context";
import bzh_view_home, { json_data } from "../net/script/bzh_view_home";
import BZHLoding from "../components/mini/BZHLoding";
import AnalysisJson from "../lib/AnalysisJson";
import BZH_Images from "../components/BZH_Images";

// const url = 
export default function () {
    const [state] = useBZHContext();
    const [data, setData] = useState(json_data);
    const [loding, setLoding] = useState(true);
    let url = import.meta.env['VITE_URL'] as string
    useEffect(() => {
        new AnalysisJson<any>(new BZHNet().setUrl(url).get(), bzh_view_home, (data) => {
            setData(data)
            setTimeout(() => {
                setLoding(false)
            }, 500);
        })
    }, [])
    return <BZHLoding loding={loding}>
        <div className={`app m-auto ${state.full ? 'p-2' : 'p-2'}`}>
            <div className="relative flex justify-center items-center">
                <div className="flex items-center gap-1.5 absolute">
                    <Input placeholder="输入关键字..." className="w-100" />
                    <Button size="lg">
                        <Icon icon="material-symbols:image-search" width={100} />
                    </Button>
                </div>
                <img src={data.bg} className="rounded-sm w-full" />
            </div>
            <Tabs className="w-full text-center my-5">
                <Tabs.ListContainer>
                    <Tabs.List
                        aria-label="Options"
                        className="*:data-[selected=true]:text-accent-foreground w-fit *:h-6 *:w-fit *:px-3 *:text-sm *:font-normal"
                    >
                        {data.tags.map((item, idx) => {
                            return <Tabs.Tab id={idx} key={idx}>
                                {item.label.replace('#', '')}
                                <Tabs.Indicator className="bg-accent" />
                            </Tabs.Tab>
                        })}
                    </Tabs.List>
                </Tabs.ListContainer>
            </Tabs>
            <BZH_Images url={url.concat(`/page/1/`)}></BZH_Images>
        </div>
    </BZHLoding>
}