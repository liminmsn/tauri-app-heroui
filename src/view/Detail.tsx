import { Button, Description, Label, Radio, RadioGroup } from "@heroui/react"
import { useEffect, useState } from "react"
import { NavLink, useLocation } from "react-router"
import { BZHNet } from "../net/BZHNet"
import AnalysisJson from "../lib/AnalysisJson"
import bzh_view_detail, { detil } from "../net/script/bzh_view_detail"
import BZHLoding from "../components/mini/BZHLoding"
import { Icon } from "@iconify/react"
import { invoke } from "@tauri-apps/api/core"

export default function () {
    const { search } = useLocation()
    const [loding, setLoding] = useState(true)
    const [data, setData] = useState(detil)
    const [selectd, setSelectd] = useState<string | null>(null)

    function save() {
        if (selectd != null) {
            invoke<any>('down_image', { url: selectd }).then(val => {
                alert(val)
            })
        }
    }

    useEffect(() => {
        new AnalysisJson(new BZHNet().setUrl(search.replace('?', '')), bzh_view_detail, (data) => {
            setData({ ...data, down_info: data.down_info.map(item => { return { ...item, bol: false } }), imgs: data.imgs.filter((item) => item.item_img != '') })
            setLoding(false)
        })
        return function () {
            setLoding(true)
            // setData(detil)
        }
    }, [search])
    return <BZHLoding loding={loding}>
        <div className="h-8/12">
            <div className="bzh_img_bg" style={{ backgroundImage: `url(${data.bg})` }}></div>
            <div className="p-2 h-full relative">
                <img className="mx-auto h-full rounded-sm shadow-md" src={data.bg} />
            </div>
        </div>
        <div className="p-2 relative">
            <div className="flex">
                <div className="bzh_card flex-1">
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
                <div className="bzh_card mx-2 max-w-80">
                    <Label className="mb-4 pr-2 justify-self-start font-bold pb-1 border-b-2 border-accent flex items-center">
                        <Icon icon="ic:twotone-category" height="20" />
                        标签
                    </Label>
                    <div className="flex flex-wrap content-start gap-1.5">
                        {data.tags.map(item => {
                            return <span className=" rounded-sm bg-accent inline-block leading-1 text-sm p-1" key={item.href}>
                                <Label>{item.label.slice(1)}</Label>
                            </span>
                        })}
                    </div>
                </div>
                <div className="bzh_card">
                    <Label className="mb-4 pr-2 justify-self-start font-bold pb-1 border-b-2 border-accent flex items-center">
                        <Icon icon="ic:twotone-file-open" height="20" />
                        <span className="ml-1">执行操作</span>
                    </Label>
                    {/* <CheckboxGroup name="interests">
                        <Label>选择你喜欢的尺寸</Label>
                       
                        {JSON.stringify(selectd)}
                        {detil.down_info.map(item => {
                            return
                        })}
                    </CheckboxGroup> */}
                    <RadioGroup defaultValue="premium" name="plan" onChange={(val) => setSelectd(val)}>
                        <Description>选择你喜欢的尺寸</Description>
                        {detil.down_info.map(item => {
                            return <Radio value={item.href} key={item.href}>
                                <Radio.Control>
                                    <Radio.Indicator />
                                </Radio.Control>
                                <Radio.Content>
                                    <Label>{item.label}</Label>
                                    {/* <Description>{item.href}</Description> */}
                                </Radio.Content>
                            </Radio>
                        })}
                    </RadioGroup>
                    <div className="flex gap-1 mb-2 mt-4">
                        <Button className="w-full rounded-sm" onClick={() => save()}>
                            <Icon icon="line-md:download-twotone-loop" />
                        </Button>
                        <Button className="w-full rounded-sm">
                            <Icon icon="line-md:image-twotone" />
                        </Button>
                    </div>
                </div>
            </div>
            <div className="bzh_card mt-2">
                <Label className="pr-2 mb-2 justify-self-start font-bold pb-1 border-b-2 border-accent flex items-center">
                    <Icon icon="ic:twotone-info" height="20" />
                    <span className="ml-1">猜你喜欢</span>
                </Label>
                <div className="grid grid-cols-4 gap-1.5">
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
                                <div className="invisible group-hover/item:visible absolute bottom-0 p-1 py-2 w-full rounded-sm rounded-t-none overflow-hidden text-ellipsis" style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(2px)', fontSize: '10pt', lineHeight: 1.4 }}>
                                    <Label className="text-nowrap">{item.item_info.disc}</Label>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    </BZHLoding >
}