import { Label, Tabs } from "@heroui/react";
import { useEffect, useRef, useState } from "react";
import { BZHNet } from "../net/BZHNet";
// import { Icon } from "@iconify/react";
import bzh_view_home, { json_data } from "../net/script/bzh_view_home";
import BZHLoding from "../components/mini/BZHLoding";
import AnalysisJson from "../lib/AnalysisJson";
import BZH_Images from "../components/BZH_Images";
// import { Form, NavLink } from "react-router";
import bzh_view_imgs from "../net/script/bzh_view_imgs";

export default function () {
    const [data, setData] = useState(json_data);
    const [url, setUrl] = useState(String(import.meta.env['VITE_URL']).concat('/page/'))
    const [loding, setLoding] = useState(true);
    const page = useRef(1);
    useEffect(() => {
        new AnalysisJson<any>(new BZHNet().setUrl(import.meta.env['VITE_URL']).get(), bzh_view_home, (data) => {
            setData(data)
            setLoding(false)
        })
    }, [])

    function setUrlVal(item: { href: string, label: string }) {
        page.current = 1;
        if (item.href == 'JavaScript:;') {
            setUrl(String(import.meta.env['VITE_URL']).concat('/page/'))
        } else {
            setUrl(item.href)
        }
    }

    // const [searchLabel, setSearchLabel] = useState('');
    return <BZHLoding loding={loding}>
        <div className={`app m-auto p-1.5`}>
            <div className="relative flex justify-center items-center">
                <div className="flex items-center gap-1.5 absolute">
                    <Label className="text-2xl font-black">15265+份高清4K / 8K壁纸图片提供免费下载！</Label>
                    {/* <Input placeholder="输入关键字..." className="w-100" onInputCapture={(e) => { setSearchLabel((e.target as any).value) }} />
                    <NavLink to={`/search/${searchLabel}`}>
                        <Button size="lg" type="submit">
                            <Icon icon="iconamoon:search-fill" />
                        </Button>
                    </NavLink> */}
                </div>
                <img src={data.bg} className="rounded-sm w-full" />
            </div>
            <Tabs className="w-full text-center my-4">
                <Tabs.ListContainer>
                    <Tabs.List
                        aria-label="Options"
                        className="*:data-[selected=true]:text-accent-foreground w-fit *:h-6 *:w-fit *:px-3 *:text-sm *:font-normal"
                    >
                        {data.tags.map((item, idx) => {
                            return <Tabs.Tab id={idx} key={idx} onClick={() => setUrlVal(item)}>
                                {item.label.replace('#', '')}
                                <Tabs.Indicator className="bg-accent" />
                            </Tabs.Tab>
                        })}
                    </Tabs.List>
                </Tabs.ListContainer>
            </Tabs>
            <BZH_Images page={page} url={url} analy={bzh_view_imgs}></BZH_Images>
        </div>
    </BZHLoding>
}