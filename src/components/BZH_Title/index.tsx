import { Label } from '@heroui/react'
import { Icon } from '@iconify/react'
import './style.css'
import { useBZHContext } from '../../context'

const APP_Name = import.meta.env['VITE_NAME']
export default function BZH_Title() {
    const [state] = useBZHContext()

    return <div className='bzh_title p-1'>
        <Icon icon="catppuccin:typescript-react" width="16" height="16" />
        <Label className="float-left" style={{ lineHeight: 1.2 }}>{APP_Name}</Label>
    </div>
}