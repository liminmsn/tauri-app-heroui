import { Button, Checkbox, CheckboxGroup, Chip, Description, Label } from "@heroui/react"
import { useEffect, useState } from "react"
import { NavLink, useLocation } from "react-router"
import { BZHNet } from "../net/BZHNet"
import AnalysisJson from "../lib/AnalysisJson"
import bzh_view_detail, { detil } from "../net/script/bzh_view_detail"
import BZHLoding from "../components/mini/BZHLoding"
import { Icon } from "@iconify/react"

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
                        <Label className="mb-2 pr-2 justify-self-start font-bold pb-1 border-b-2 border-accent flex items-center">
                            <Icon icon="ic:twotone-info" height="20" />
                            <span className="ml-1">作品信息</span>
                        </Label>
                        {
                            data.infos.map(item => {
                                return <div key={item}>
                                    <Label >{item}</Label>
                                </div>
                            })
                        }
                        <Label className="text-warning">{data.info_tag}</Label>
                    </div>
                    <div className="p-2 max-w-60 bg-surface shadow-sm rounded-md">
                        <Label className="mb-4 pr-2 justify-self-start font-bold pb-1 border-b-2 border-accent flex items-center">
                            <Icon icon="ic:twotone-category" height="20" />
                            标签
                        </Label>
                        <div className="flex flex-wrap content-start gap-1.5">
                            {data.tags.map(item => {
                                return <span className="p-1 rounded-sm bg-background inline-block" key={item.href}>
                                    <Label>{item.label.slice(1)}</Label>
                                </span>
                            })}
                        </div>
                    </div>
                    <div className="p-2 max-w-100 bg-surface shadow-sm rounded-md">
                        <Label className="mb-4 pr-2 justify-self-start font-bold pb-1 border-b-2 border-accent flex items-center">
                            <Icon icon="ic:twotone-file-open" height="20" />
                            <span className="ml-1">执行操作</span>
                        </Label>
                        <CheckboxGroup name="interests">
                            {/* <Label>选择你喜欢的尺寸</Label> */}
                            <Description>选择你喜欢的尺寸</Description>
                            {detil.down_info.map(item => {
                                return <Checkbox value="coding" key={item.href}>
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
                        <Button className="w-full mt-4 mb-2 rounded-sm">
                            <Icon icon="line-md:cloud-alt-download-filled" width="30" height="30" />
                        </Button>
                    </div>
                </div>
            </div>
            <Label className="ml-2 pr-2 justify-self-start font-bold pb-1 border-b-2 border-accent flex items-center">
                <Icon icon="ic:baseline-celebration" height="20" />
                <span className="ml-1">猜你喜欢</span>
            </Label>
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