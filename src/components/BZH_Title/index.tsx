import { useEffect } from 'react'
import { Label } from '@heroui/react'
import { Icon } from '@iconify/react'
import './style.css'

const APP_Name = import.meta.env['VITE_NAME']
export default function BZH_Title() {
    useEffect(() => {

    }, [])

    return <div className='bzh_title p-1'>
        <Icon icon="catppuccin:typescript-react" width="16" height="16" />
        <Label className="float-left text-surface" style={{ lineHeight: 1.2 }}>{APP_Name}</Label>
    </div>
}