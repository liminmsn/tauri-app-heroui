import { useEffect, useRef, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import { Label } from "@heroui/react"

export default function () {
    const p = useRef<HTMLParagraphElement>(null);
    const { pid } = useParams();
    const [select, setSelect] = useState('');
    const loaderData = useLoaderData<{ yw: string; jsfy: string; zscc: string; }>();
    const labelData = [
        { label: '原文', data: loaderData?.yw || 'null' },
        { label: '解释翻译', data: loaderData?.jsfy || 'null' },
        { label: '注释出处', data: loaderData?.zscc || 'null' }
    ];
    function setContext(context: { label: string; data: string }) {
        setSelect(context.label);
        p.current!.innerHTML = context.data;
    }

    useEffect(() => {
        setContext(labelData[0])
    }, [loaderData])
    return <div className="box-border rounded-md w-full p-4 pt-0 px-50 xl:px-100 overflow-y-auto" style={{ height: 'calc(100vh - 36px)', scrollbarWidth: 'none' }}>
        <div className="absolute top-10 right-10">
            <Label className="labelContext">{pid}</Label>
        </div>
        <p className="text-xl labelContext" style={{ lineHeight: '2' }} ref={p}></p>
        <div className="absolute right-0 bottom-20 select-none">
            {
                labelData.map(item => {
                    return <p className={`p-1 mt-1 cursor-pointer rounded-l-md ${select == item.label ? '' : 'mask-r-from-0%'}`} style={{ fontFamily: 'pfyft', background: '#C65306', backdropFilter: 'blur(20px)' }} key={item.label} onClick={() => setContext(item)}>{item.label}</p>
                })
            }
        </div>
    </div>
}