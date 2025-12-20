import { useEffect, useState } from "react";
import AnalysisJson from "../lib/AnalysisJson";
import { BZHNet } from "../net/BZHNet";
import bhz_view_imgs, { imgs } from "../net/script/bzh_view_imgs";
import BZHLoding from "./mini/BZHLoding";
import { Label } from "@heroui/react";
import { Icon } from "@iconify/react";
import { NavLink } from "react-router";

type BZHImageInfo = {
    url: string;
    children?: React.ReactNode
}
export default function ({ url }: BZHImageInfo) {
    const [img_arr, setImgs] = useState(imgs)
    const [loding, setLoding] = useState(true)

    useEffect(() => {
        new AnalysisJson(new BZHNet().setUrl(url), bhz_view_imgs, (data) => {
            setImgs(data)
            setTimeout(() => {
                setLoding(false)
            }, 200);
        })
    }, [url])
    return <BZHLoding loding={loding}>
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
                        <div className="invisible group-hover/item:visible absolute bottom-0 p-1 pb-0 w-full rounded-sm overflow-hidden text-ellipsis" style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(2px)', fontSize: '10pt', lineHeight: 1.4 }}>
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
    </BZHLoding>
}