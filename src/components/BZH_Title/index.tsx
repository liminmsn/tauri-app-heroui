import { Label } from '@heroui/react'
import logo from '../../assets/logo.png'
import './style.css'

const APP_Name = import.meta.env['VITE_NAME']
export default function BZH_Title() {

    return <div className='bzh_title flex items-center'>
        <img src={logo} width={50} />
        <Label className="float-left text-xl" style={{ lineHeight: 1.2 }}>{APP_Name}</Label>
    </div>
}