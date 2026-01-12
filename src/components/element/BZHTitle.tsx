import { Label } from '@heroui/react'
import logo from '../../assets/logo.png'
import '../css/bzh_title.css'
import BZHTitleBtn from './BZHTitleBtn'

const APP_Name = import.meta.env['VITE_NAME']
export default function () {

    return <div className='bzh_title flex items-center'>
        <Label className="logo_label float-left text-xl">
            {APP_Name}
            <img className='logo' src={logo} width={50} /></Label>
        <BZHTitleBtn />
    </div>
}