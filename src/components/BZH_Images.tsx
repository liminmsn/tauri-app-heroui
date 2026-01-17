import { RefObject, useEffect, useRef, useState } from "react";
import AnalysisJson from "../lib/AnalysisJson";
import { BZHNet } from "../net/BZHNet";
import { imgs } from "../net/script/bzh_view_imgs";
import { Label } from "@heroui/react";
import { Icon } from "@iconify/react";
import { NavLink } from "react-router";
import { useBZHContext } from "../context";
import { PacmanLoader } from "react-spinners";

type BZHImageInfo = {
    url: string;
    page: RefObject<number>;
    analy: (dom: Document) => any[];
    children?: React.ReactNode
}
export default function({ url, page, analy }: BZHImageInfo) {
    // /page/1/
    const [img_arr, setImgs] = useState<typeof imgs>([]);
    const [state] = useBZHContext();
    const loding = useRef(false);
    const isFetching = useRef(false);

    function fetchData() {
        if (isFetching.current) return
        isFetching.current = true
        loding.current = true
        new AnalysisJson(new BZHNet().setUrl(url.concat(`${page.current}`)), analy, (data) => {
            console.log(data);
            
            setImgs(prev => prev.concat(data.filter(item => item.item_img != '')));
            page.current += 1;
            loding.current = false;
            isFetching.current = false;
        })

    }

    useEffect(() => {
        setImgs([])
        fetchData();
    }, [url])
    useEffect(() => {
        if (state.percentage >= 1 && !loding.current) {
            fetchData()
        }
    }, [state.percentage])
    return <div>
        <div className="grid grid-cols-4 gap-1.5">
            {
                img_arr.map((item, idx) => {
                    return <div className="group/item text-default-foreground relative select-none cursor-pointer overflow-hidden rounded-sm" key={idx}>
                        <NavLink to={"/detail?" + item.item_href}>
                            <img src={item.item_img} />
                        </NavLink>
                        <div className="absolute top-1 left-1">
                            <Label className="font-bold text-yellow-500">
                                {item.item_icon}
                            </Label>
                        </div>
                        <div className="invisible group-hover/item:visible absolute bottom-0  p-1 py-2 w-full rounded-sm rounded-t-none overflow-hidden text-ellipsis" style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(2px)', fontSize: '10pt', lineHeight: 1.4 }}>
                            <Label className="text-nowrap">{item.item_info.disc}</Label>
                            <div className="flex justify-between w-full">
                                <Label className="flex items-center gap-1.5">
                                    {item.item_info.fa_photo}
                                    <Icon icon="line-md:image" width="20" height="24" />
                                </Label>
                                <Label className="flex text-red-500">
                                    <Icon icon="line-md:heart-filled" width="20" height="18" />
                                    {item.item_info.fa_heart}
                                </Label>
                            </div>
                        </div>
                    </div>
                })
            }
        </div>
        <div className="flex justify-center mt-2">
            {loding && <PacmanLoader color="var(--foreground)" size={8} />}
        </div>
    </div>
}