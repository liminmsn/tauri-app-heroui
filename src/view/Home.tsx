import { Button, Card, Input, Label, Tabs } from "@heroui/react";
import { useEffect, useState } from "react";
import AnalysisJson from "../lib/AnalysisJson";
import { BZHNet } from "../net/BZHNet";
import bzh_view_home, { json_data } from "../net/script/bzh_view_home";
import { Icon } from "@iconify/react";
import { useBZHContext } from "../context";

export default function () {
    const [data, setData] = useState(json_data);
    const [state] = useBZHContext();
    useEffect(() => {
        new AnalysisJson<any>(new BZHNet("").get(), bzh_view_home, setData)
    }, [])
    return <div className={`app m-auto ${state.full ? 'p-10' : 'p-2'}`}>
        <div className="relative flex justify-center items-center">
            <div className="flex items-center gap-1.5 absolute">
                <Input placeholder="输入关键字..." className="w-100" />
                <Button size="lg">
                    <Icon icon="gravity-ui:ellipsis" />
                </Button>
            </div>
            <img src={data.bg} className="rounded-sm w-full" />
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
                            return <Tabs.Tab id={idx} isDisabled={item.href == "JavaScript:;"}>
                                {item.label.replace('#', '')}
                                <Tabs.Indicator className="bg-accent" />
                            </Tabs.Tab>
                        })}
                    </Tabs.List>
                </Tabs.ListContainer>
            </Tabs>
        }
        <div className="grid grid-cols-4 gap-1.5">
            {
                data.imgs.map(item => {
                    return <div>
                        <img src={item.src} className="w-full" />
                    </div>
                })
            }
        </div>
        {/* {JSON.stringify(data)} */}
    </div>
}