import { Button, Input, Tabs } from "@heroui/react";
import { useEffect, useState } from "react";
import { BZHNet } from "../net/BZHNet";
import { Icon } from "@iconify/react";
import { useBZHContext } from "../context";
import bzh_view_home, { json_data } from "../net/script/bzh_view_home";
import AnalysisJson from "../net/AnalysisJson";

export default function () {
    const [data, setData] = useState(json_data);
    const [state] = useBZHContext();
    useEffect(() => {
        new AnalysisJson<any>(new BZHNet("").get(), bzh_view_home, setData)
    }, [])
    return <div className={`app m-auto ${state.full ? 'p-2' : 'p-2'}`}>
        <div className="relative flex justify-center items-center">
            <div className="flex items-center gap-1.5 absolute">
                <Input placeholder="输入关键字..." className="w-100" />
                <Button size="lg">
                    <Icon icon="material-symbols:image-search" width={100} />
                </Button>
            </div>
            {
                data.bg &&
                <img src={data.bg} className="rounded-sm w-full" />
            }
        </div>
        {
            data.tags.length > 1 &&
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
        }
        <div className="grid grid-cols-4 gap-1.5">
            {/* {} */}
            {/* {
                data.imgs.map((item, idx) => {
                    return <div className="" key={idx}>
                        <img src={item.src} className="w-full rounded-md shadow-md" />
                    </div>
                })
            } */}
        </div>
        {/* {JSON.stringify(data)} */}
    </div>
}