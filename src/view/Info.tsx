import { useEffect, useRef, useState } from "react";
import { useLoaderData } from "react-router";

export default function () {
    const p = useRef<HTMLParagraphElement>(null);
    const loaderData = useLoaderData<{ yw: string; jsfy: string; zscc: string; }>();
    const labelData = [{ label: '原文', data: loaderData.yw }, { label: '解释翻译', data: loaderData.jsfy }, { label: '注释出处', data: loaderData.zscc }];
    const [select, setSelect] = useState('');
    useEffect(() => {
        setContext(labelData[0])
    }, [])

    function setContext(context: { label: string; data: string }) {
        setSelect(context.label);
        p.current!.innerHTML = context.data;
    }

    return <div className="box-border rounded-md w-full p-4 pt-0 overflow-y-auto" style={{ height: 'calc(100vh - 36px)', scrollbarWidth: 'none' }}>
        <p className="text-xl" style={{ lineHeight: '2' }} ref={p}></p>
        <div className="absolute right-0 bottom-20 select-none">
            {
                labelData.map(item => {
                    return <p className={`p-1 mt-1 cursor-pointer rounded-l-md ${select == item.label ? '' : 'mask-r-from-0%'}`} style={{ fontFamily: 'pfyft', backdropFilter: 'blur(20px)' }} key={item.label} onClick={() => setContext(item)}>{item.label}</p>
                })
            }
        </div>
    </div>
}