import { Button, Checkbox, CheckboxGroup, Chip, Description, Label } from "@heroui/react"
import { useEffect, useState } from "react"
import { NavLink, useLocation } from "react-router"
import { BZHNet } from "../net/BZHNet"
import AnalysisJson from "../lib/AnalysisJson"
import bzh_view_detail, { detil } from "../net/script/bzh_view_detail"
import BZHLoding from "../components/mini/BZHLoding"

export default function () {
    const { search } = useLocation()
    const [loding, setLoding] = useState(true)
    const [data, setData] = useState(detil)
    useEffect(() => {
        new AnalysisJson(new BZHNet().setUrl(search.replace('?', '')), bzh_view_detail, (data) => {
            setData(data)
            setLoding(false)
        })
        return function () {
            setLoding(true)
            // setData(detil)
        }
    }, [search])
    return <div className="w-full h-full">
        <BZHLoding loding={loding}>
            <div className="gap-1.5">
                <img className="w-full" src={data.bg} decoding="sync" />
                <div className="flex p-2 gap-2">
                    <div className="flex-1 p-2 bg-surface shadow-sm rounded-md">
                        <div className="mb-2"><Label className="font-bold pb-1 border-b-2 border-accent">作品信息</Label></div>
                        {
                            data.infos.map(item => {
                                return <div key={item}>
                                    <Label >{item}</Label>
                                </div>
                            })
                        }
                        <Label className="text-warning">{data.info_tag}</Label>
                    </div>
                    <div className="p-2 max-w-100 bg-surface shadow-sm rounded-md">
                        <CheckboxGroup name="interests">
                            <Label>选择你喜欢的尺寸</Label>
                            <Description>执行操作</Description>
                            {detil.down_info.map(item => {
                                return <Checkbox value="coding">
                                    <Checkbox.Control>
                                        <Checkbox.Indicator />
                                    </Checkbox.Control>
                                    <Checkbox.Content>
                                        <Label>{item.label}</Label>
                                        {/* <Description>{item.href}</Description> */}
                                    </Checkbox.Content>
                                </Checkbox>
                            })}
                        </CheckboxGroup>
                        <Button className="w-full mt-4">下载</Button>
                    </div>
                </div>
            </div>
            <div className="p-2 w1/2">
                <Label className="font-bold pb-1 border-b-2 mr-2 border-accent">猜你喜欢</Label>
                {data.tags.map(item => {
                    return <Chip className="ml-1">
                        <Label>{item.label.slice(1)}</Label>
                    </Chip>
                    // <Label className="p-1 rounded-sm shadow-md mr-2 bg-surface text-accent" key={item.href}> {item.label.replace('#', '')}</Label>
                })}
            </div>
            <div className="grid grid-cols-4 gap-1.5 p-2">
                {
                    data.imgs.map((item, idx) => {
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
                            </div>
                        </div>
                    })
                }
            </div>
        </BZHLoding >
    </div >
}