import { Label } from '@heroui/react'
import { useBZHContext } from '../context'

const APP_Name = import.meta.env['VITE_NAME']
export default function BZH_Title() {
    const [state] = useBZHContext()

    return <div className='p-1 text-nowrap flex'>
        {/* <Icon icon="catppuccin:typescript-react" width="16" height="16" /> */}
        <img src="/icon.ico" />
        <Label className="float-left ml-1 font-bold" style={{ lineHeight: 1.2 }}>{APP_Name}</Label>
    </div>
}